import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoriRoutingModule } from './autori-routing.module';
import { AutoriComponent } from './autori/autori.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    AutoriComponent
  ],
  imports: [
    CommonModule,
    AutoriRoutingModule
  ]
})
export class AutoriModule { }
