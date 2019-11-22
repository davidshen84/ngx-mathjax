/**
 * @author davidshen84
 */

import 'mathjax/es5/tex-chtml';

import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathJaxDirective } from './math-jax.directive';
import { MathJaxComponent } from './math-jax.component';

declare global {
  interface Window {
    MathJax: object;
  }
}

/**
 * Module to load and configure the MathJax library.
 */
@NgModule({
  declarations: [MathJaxDirective, MathJaxComponent],
  imports: [
    CommonModule
  ],
  exports: [MathJaxDirective, MathJaxComponent]
})
export class MathJaxModule {

  constructor() {
    MathJax.texReset();
  }

  /**
   * Configure the module for the root module.
   */
  public static forRoot(): ModuleWithProviders<MathJaxModule> {
    return {
      ngModule: MathJaxModule,
    };
  }

  /**
   * Configure the module for a child module.
   */
  public static forChild() {
    return {
      ngModule: MathJaxModule
    };
  }
}
