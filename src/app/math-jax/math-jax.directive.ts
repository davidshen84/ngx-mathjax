import {AfterViewInit, Directive, ElementRef, OnDestroy} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {create} from 'rxjs-spy';
import {MathJaxService} from './math-jax.service';

create();

@Directive({
  selector: '[appMathJax]'
})
export class MathJaxDirective implements AfterViewInit, OnDestroy {

  private readonly _mathJaxHub$: Observable<MathJax.Hub>;
  private readonly _el: HTMLElement;
  private _sub: Subscription;

  constructor(el: ElementRef, private _service: MathJaxService) {
    this._mathJaxHub$ = _service.MathJaxHub$;
    this._el = el.nativeElement;
  }

  ngAfterViewInit(): void {
    this._sub = this._mathJaxHub$.subscribe(mjHub => {
      mjHub.Queue(['Typeset', mjHub, this._el]);
    });
  }

  ngOnDestroy(): void {
    if (this._sub !== undefined) {
      this._sub.unsubscribe();
    }
  }

}
