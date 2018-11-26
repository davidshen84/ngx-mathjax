/**
 * @author davidshen84
 */
import {UpdateValue} from './domain/interfaces';
import {AfterViewInit, Directive, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {Observable, ReplaySubject, Subject, Subscription} from 'rxjs';
import {MathJaxService} from './math-jax.service';
import {map, switchMap} from 'rxjs/operators';

/**
 * Typeset the content or expressions using MathJax library.
 */
@Directive({
  selector: 'mathjax, [mathjax]'
})
export class MathJaxDirective implements AfterViewInit, OnChanges, OnDestroy {

  private readonly _mathJaxHub$: Observable<any>;
  /**
   * The associated native element.
   */
  private readonly _el: HTMLElement;

  /**
   * An array of input MathJax expressions.
   */
  @Input('mathjax')
  private _expressions: string;

  /**
   * Observes the change of the input expression.
   */
  private _change$ = new ReplaySubject<UpdateValue<string>[]>();

  /**
   * Observes the completion of the initial MathJax typesetting.
   */
  private _typeset$ = new Subject<any>();
  private _subscription: Subscription;

  constructor(el: ElementRef, service: MathJaxService) {
    this._mathJaxHub$ = service.MathJaxHub$;
    this._el = el.nativeElement;

    this._subscription = this._mathJaxHub$.pipe(
      switchMap(() => this.jax$),
      switchMap(jax => this._change$.pipe(
        map(updateValue => ({updateValue, jax}))))
    ).subscribe(({updateValue, jax}) =>
      updateValue.forEach(v => MathJax.Hub.Queue(['Text', jax[v.order], v.value])));
  }

  /**
   * @returns All the Jax elements.
   */
  private get jax$(): Observable<MathJax.ElementJax[]> {
    return this._typeset$.pipe(
      map(() => MathJax.Hub.getAllJax(this._el))
    );
  }

  ngAfterViewInit(): void {
    this._mathJaxHub$.subscribe(() => {
      MathJax.Hub.Queue(['Typeset', MathJax.Hub, this._el]);
      MathJax.Hub.Queue(['next', this._typeset$]);
      MathJax.Hub.Queue(['complete', this._typeset$]);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const expressions = changes['_expressions'];

    // Shortcut if there's nothing to update.
    if (!(expressions.currentValue instanceof Array)) {
      return;
    }

    // Update only the changed expressions.
    const updateValues: UpdateValue<string>[] = expressions.currentValue
      .map((cv, i) =>
        (expressions.previousValue ? expressions.previousValue[i] !== cv : true) ?
          {
            value: expressions.currentValue[i],
            order: i
          }
          : undefined)
      .filter(v => v);
    this._change$.next(updateValues);
  }

  ngOnDestroy(): void {
    this._change$.complete();
    this._subscription.unsubscribe();
  }
}
