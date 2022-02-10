import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartiComponent } from './carti/carti.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'carti',
  },
  {
    path: '',
    component: CartiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartiRoutingModule { }
