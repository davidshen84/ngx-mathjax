import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  template: `
    <p>
      Use this dummy to test how the MathJax queue works when the component is being destroyed.
      <markdown mathjax>
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

  constructor() {
  }

  ngOnInit() {
  }

}
