import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { DummyComponent } from './dummy/dummy.component';

export const routes: Routes = [
  {path: 'demo', component: DemoComponent},
  {path: 'dummy', component: DummyComponent},
  {path: 'module', loadChildren: () => import('./module-demo/module-demo.module').then(m => m.ModuleDemoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
