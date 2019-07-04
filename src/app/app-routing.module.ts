import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DemoComponent} from './demo/demo.component';
import {DummyComponent} from './dummy/dummy.component';

export const routes: Routes = [
  {path: 'demo', component: DemoComponent},
  {path: 'dummy', component: DummyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
