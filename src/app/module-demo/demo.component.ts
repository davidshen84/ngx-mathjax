/* eslint-disable prettier/prettier */
import { Component, OnInit, ViewChild } from '@angular/core';
import { MathJaxDirective } from '../math-jax/math-jax.directive';

@Component({
  selector: 'mathjax-demo',
  template: `
    This dummy module is used to test the Module configuration inside a child module.
    <markdown preserveWhitespaces mathjax>
      # Title


      *markdown*

      $$
      mathjax = 1
      $$

      More math: \\\\( E = mc^2 \\\\)
    </markdown>
    <div>
      <h3>Dynamic typeset</h3>
      <form #myform="ngForm">
        <label>
          Exp1:
          <input [(ngModel)]="exp1" name="exp1"/>
        </label>
        <label>
          Exp2:
          <input [(ngModel)]="exp2" name="exp2" />
        </label>
        <div #jax [mathjax]="[exp1, exp2]">
          <div>Exp1: \\( {{ '{}' }} \\)</div>
          <div>Exp2: $$ {{ '{}' }} $$</div>
        </div>
      </form>
    </div>
    <markdown
      #mdSrc
      src="assets/demo.md"
      mathjax
      (load)="mdSrcMathJax.MathJaxTypeset()"
    ></markdown>
  `,
  styles: [],
})
export class DemoComponent implements OnInit {
  exp1 = 'E = mc^2';
  exp2 = 'x = 1';

  @ViewChild('mdSrc', { read: MathJaxDirective, static: true })
  mdSrcMathJax: MathJaxDirective;

  ngOnInit(): void {}
}
