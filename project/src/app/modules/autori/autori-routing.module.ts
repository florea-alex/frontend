import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoriComponent } from './autori/autori.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'autori',
  },
  {
    path: '',
    component: AutoriComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoriRoutingModule { }
