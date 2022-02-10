import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MagazineComponent } from './magazine/magazine.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'magazine',
  },
  {
    path: 'magazine',
    component: MagazineComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MagazineRoutingModule { }
