import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MathJaxModule} from './math-jax/math-jax.module';
import {FormsModule} from '@angular/forms';

/**
 * @ignore
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MathJaxModule.config()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
