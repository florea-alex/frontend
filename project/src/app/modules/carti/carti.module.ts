import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartiRoutingModule } from './carti-routing.module';
import { CartiComponent } from './carti/carti.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    CartiComponent
  ],
  imports: [
    CommonModule,
    CartiRoutingModule
  ]
})
export class CartiModule { }
