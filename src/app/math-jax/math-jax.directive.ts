/**
 * @author davidshen84
 */
import {UpdateValue} from './domain/interfaces';
import {AfterViewInit, Directive, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {combineLatest, Observable, ReplaySubject, Subject, Subscription} from 'rxjs';
import {MathJaxService} from './math-jax.service';
import {map} from 'rxjs/operators';


/**
 * Typeset the content or expressions using MathJax library.
 */
@Directive({
  selector: 'mathjax, [mathjax]'
})
export class MathJaxDirective implements AfterViewInit, OnChanges, OnDestroy {

  private readonly mathJaxHub$: Observable<any>;
  /**
   * The associated native element.
   */
  private readonly element: HTMLElement;

  /**
   * An array of input MathJax expressions.
   */
  @Input('mathjax')
  private mathJaxExpressions: string[];

  /**
   * Observes the change of the input expression.
   */
  private expressionChange$ = new ReplaySubject<UpdateValue<string>[]>();

  /**
   * Observes the completion of the initial MathJax typesetting.
   */
  private mathJaxTypeset$ = new Subject<any>();
  private expressionChangeSubscription: Subscription;
  private hubSubscription: Subscription;
  private isDestroying: boolean;

  constructor(el: ElementRef, service: MathJaxService) {
    this.mathJaxHub$ = service.MathJaxHub$;
    this.element = el.nativeElement;


    this.expressionChangeSubscription = combineLatest([this.mathJaxHub$, this.jax$, this.expressionChange$])
      .subscribe(([_, jax, updateValue]) =>
        updateValue.forEach(v => MathJax.Hub.Queue(() => {
          // Stop pushing messages to the queue when the component is being destroyed.
          if (!this.isDestroying) {
            return jax[v.order].Text(v.value);
          }
        })));
  }

  /**
   * @returns All the Jax elements.
   */
  private get jax$(): Observable<MathJax.ElementJax[]> {
    return this.mathJaxTypeset$.pipe(
      map(() => MathJax.Hub.getAllJax(this.element))
    );
  }

  ngAfterViewInit(): void {
    this.hubSubscription = this.mathJaxHub$.subscribe(() => {
      MathJax.Hub.Queue(['Typeset', MathJax.Hub, this.element]);
      MathJax.Hub.Queue(['next', this.mathJaxTypeset$]);
      MathJax.Hub.Queue(['complete', this.mathJaxTypeset$]);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const expressions = changes.mathJaxExpressions;

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
    this.expressionChange$.next(updateValues);
  }

  ngOnDestroy(): void {
    this.isDestroying = true;
    this.expressionChangeSubscription.unsubscribe();
    this.hubSubscription.unsubscribe();
    this.expressionChange$.complete();
  }
}
