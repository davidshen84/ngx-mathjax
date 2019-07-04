import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dummy',
  template: `
    <p>
      Use this du
      mmy to test how the MathJax queue works when the component is being destroyed.
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
