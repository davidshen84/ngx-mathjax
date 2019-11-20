import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-mathjax',
  template: `
      <div #output></div>
  `,
  styles: []
})
export class MathJaxComponent implements OnInit, OnChanges {

  @Input()
  expression: string;

  @ViewChild('output', {static: true})
  private outputRef: ElementRef;

  private outputElement: HTMLElement;
  private metrics: MathJax.Metrics;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    if (changes['expression'].firstChange) {
      // Initialize fields on first change.
      this.outputElement = this.outputRef.nativeElement;
      this.metrics = MathJax.getMetricsFor(this.outputElement);
    }
    const value = changes['expression'].currentValue;

    MathJax.tex2chtmlPromise(value, this.metrics).then(node => {
      MathJax.startup.document.clear();
      MathJax.startup.document.updateDocument();
      this.outputElement.innerHTML = '';
      this.outputElement.appendChild(node);
    });
  }

}
