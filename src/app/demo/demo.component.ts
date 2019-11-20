import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mathjax-demo',
  template: `
    <div>
      <h2>Math Equation</h2>
      <div mathjax *ngIf="show">
        Fact:
        $$
        E = mc^2
        $$
      </div>
    </div>

    <div>
      <h2>Math inline</h2>
      <div mathjax>
        Fact: \\( E = mc^2 \\)
      </div>
    </div>

    <div>
      <h3>Dynamic typeset</h3>
      <form #myform="ngForm">
        <label>
          Exp1:
          <input [(ngModel)]="exp1" name="exp1"/>
        </label>
        <label>
          Exp2:
          <input [(ngModel)]="exp2" name="exp2"/>
        </label>
          <div>
              <ngx-mathjax [expression]="exp1"></ngx-mathjax>
              <ngx-mathjax [expression]="exp2"></ngx-mathjax>
        </div>
      </form>
    </div>

    <button (click)="show = !show">Hide/Show</button>
  `,
  styles: []
})
export class DemoComponent implements OnInit {

  show = true;
  exp1 = 'E = mc^2';
  exp2 = 'x = 1';

  constructor() {
  }

  ngOnInit() {
  }

}
