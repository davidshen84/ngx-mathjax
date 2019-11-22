/**
 * @author davidshen84
 */

import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { switchMapTo } from 'rxjs/operators';
import { fromPromise } from 'rxjs/internal-compatibility';

/**
 * Typeset the content or expressions using MathJax library.
 */
@Directive({
  selector: '[mathjax], [ngx-mathjax]'
})
export class MathJaxDirective implements OnInit, AfterViewInit, OnDestroy {

  @Input()
  initTypeset = true;

  private afterViewInitSubject = new Subject();
  private typesetSubject = new Subject();

  /**
   * The associated native element.
   */
  private readonly outputElement: HTMLElement;
  private subscription: Subscription;

  constructor(el: ElementRef) {
    this.outputElement = el.nativeElement;
  }

  ngOnInit(): void {
    this.subscription = this.afterViewInitSubject.pipe(
      switchMapTo(this.typesetSubject),
      switchMapTo(fromPromise(MathJax.startup.promise
          .then(() => {
            MathJax.startup.document.state(0);
            MathJax.texReset();
            return MathJax.typesetPromise([this.outputElement]);
          })
        )
      ),
    ).subscribe();
  }

  ngAfterViewInit(): void {
    if (this.initTypeset) {
      this.typesetSubject.next();
    }
    this.afterViewInitSubject.next();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();

    this.afterViewInitSubject.complete();
    this.typesetSubject.complete();
  }

  typeset(): void {
    this.typesetSubject.next();
  }
}
