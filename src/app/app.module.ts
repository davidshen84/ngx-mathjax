import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MathJaxModule} from './math-jax/math-jax.module';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {DummyComponent} from './dummy/dummy.component';
import {DemoComponent} from './demo/demo.component';

/**
 * @ignore
 */
@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MathJaxModule.config(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
