import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MathJaxModule } from './math-jax/math-jax.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MathJaxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
