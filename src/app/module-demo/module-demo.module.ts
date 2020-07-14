import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleDemoRoutingModule } from './module-demo-routing.module';
import { DemoComponent } from './demo.component';
import { MarkdownModule } from 'ngx-markdown';
import { MathJaxModule } from '../math-jax/math-jax.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    MathJaxModule.forChild(),
    MarkdownModule.forChild(),
    ModuleDemoRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class ModuleDemoModule {}
