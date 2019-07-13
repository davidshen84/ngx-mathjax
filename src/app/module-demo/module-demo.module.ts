import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleDemoRoutingModule } from './module-demo-routing.module';
import { DemoComponent } from './demo.component';
import { MarkdownModule } from 'ngx-markdown';
import { MathJaxModule } from '../math-jax/math-jax.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    MathJaxModule.config(false),
    MarkdownModule.forChild(),
    ModuleDemoRoutingModule,
    FormsModule
  ]
})
export class ModuleDemoModule {
}
