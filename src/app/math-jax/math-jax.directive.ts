/**
 * @author davidshen84
 */

import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { MathJaxService } from './math-jax.service';

/**
 * Typeset the content or expressions using MathJax library.
 */
@Directive({
  selector: 'mathjax, [mathjax]'
})
export class MathJaxDirective implements OnDestroy, OnInit {

  /**
   * The associated native element.
   */
  private readonly outputElement: HTMLElement;

  constructor(el: ElementRef, service: MathJaxService) {
    this.outputElement = el.nativeElement;
  }

  ngOnInit(): void {
    // noinspection JSIgnoredPromiseFromCall
    MathJax.typesetPromise([this.outputElement]);
  }

  ngOnDestroy(): void {
  }
}
