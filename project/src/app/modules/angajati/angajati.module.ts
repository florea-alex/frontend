import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngajatiRoutingModule } from './angajati-routing.module';
import { AngajatiComponent } from './angajati/angajati.component';
import { MaterialModule } from '../material/material.module';
import { MarksPipe } from 'src/app/marks.pipe';
import { AngajatComponent } from './angajat/angajat.component';


@NgModule({
  declarations: [
    AngajatiComponent, AngajatComponent, MarksPipe
  ],
  imports: [
    CommonModule,
    AngajatiRoutingModule,
    MaterialModule,
  ],
  exports: [
    MarksPipe,
  ]
})
export class AngajatiModule { }
