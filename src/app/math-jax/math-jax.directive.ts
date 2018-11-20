import {AfterViewInit, Directive, ElementRef} from '@angular/core';
import {Observable} from 'rxjs';
import {MathJaxService} from './math-jax.service';


@Directive({
  selector: 'mathjax, [mathjax]'
})
export class MathJaxDirective implements AfterViewInit {

  private readonly _mathJaxHub$: Observable<any>;
  private readonly _el: HTMLElement;

  constructor(el: ElementRef, service: MathJaxService) {
    this._mathJaxHub$ = service.MathJaxHub$;
    this._el = el.nativeElement;
  }

  ngAfterViewInit(): void {
    this._mathJaxHub$.subscribe(() => {
      MathJax.Hub.Queue(['Typeset', MathJax.Hub, this._el]);
    });
  }

}
