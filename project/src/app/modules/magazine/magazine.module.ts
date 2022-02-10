import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MagazineRoutingModule } from './magazine-routing.module';
import { MagazineComponent } from './magazine/magazine.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    MagazineComponent
  ],
  imports: [
    CommonModule,
    MagazineRoutingModule
  ]
})
export class MagazineModule { }
