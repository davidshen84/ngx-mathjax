import { Component, OnInit, ViewChild } from '@angular/core';
import { MathJaxDirective } from '../math-jax/math-jax.directive';

@Component({
  selector: 'app-dummy',
  template: `
    <p>
      Use this dummy to test how the MathJax queue works when the component is being destroyed.
      <markdown #md ngx-mathjax (load)="mdMathJax.typeset()">
        # Title

        *test*

        $$
        math = 1
        $$
      </markdown>
    </p>
  `,
  styles: []
})
export class DummyComponent implements OnInit {

  @ViewChild('md', {static: true, read: MathJaxDirective})
  public mdMathJax: MathJaxDirective;

  constructor() {
  }

  ngOnInit() {
  }

}
