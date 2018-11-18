import {AfterViewInit, Directive, ElementRef, OnDestroy} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {MathJaxService} from './math-jax.service';


@Directive({
  selector: 'mathjax, [mathjax]'
})
export class MathJaxDirective implements AfterViewInit, OnDestroy {

  private readonly _mathJaxHub$: Observable<MathJax.Hub>;
  private readonly _el: HTMLElement;
  private _sub: Subscription;

  constructor(el: ElementRef, service: MathJaxService) {
    this._mathJaxHub$ = service.MathJaxHub$;
    this._el = el.nativeElement;
  }

  ngAfterViewInit(): void {
    this._sub = this._mathJaxHub$.subscribe(hub => {
      hub.Queue(['Typeset', hub, this._el]);
    });
  }

  ngOnDestroy(): void {
    if (this._sub !== undefined) {
      this._sub.unsubscribe();
    }
  }

}
