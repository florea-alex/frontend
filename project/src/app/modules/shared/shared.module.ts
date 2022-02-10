import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditAngajatComponent } from './add-edit-angajat/add-edit-angajat.component';
import { AddEditClientComponent } from './add-edit-client/add-edit-client.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HoverBtnDirective } from 'src/app/hover-btn.directive';



@NgModule({
  declarations: [
    AddEditAngajatComponent,
    AddEditClientComponent,
    HoverBtnDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    AddEditAngajatComponent,
    AddEditClientComponent,
  ],
  exports: [
    HoverBtnDirective,
  ]
})
export class SharedModule { }
