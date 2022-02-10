import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientiComponent } from './clienti/clienti.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'clienti',
  },
  {
    path: 'clienti',
    component: ClientiComponent
  },
  {
    path: 'client/:id',
    component: ClientiComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientiRoutingModule { }
