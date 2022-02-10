import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngajatiComponent } from './angajati/angajati.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'angajati',
  },
  {
    path: 'angajati',
    component: AngajatiComponent
  },
  {
    path: 'angajat/:id',
    component: AngajatiComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngajatiRoutingModule { }
