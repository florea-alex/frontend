import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientiRoutingModule } from './clienti-routing.module';
import { ClientiComponent } from './clienti/clienti.component';
import { MaterialModule } from '../material/material.module';
import { ChildComponent } from './child/child.component';
import { ClientComponent } from './client/client.component';
import { MarksPipe } from 'src/app/marks.pipe';


@NgModule({
  declarations: [
    ClientiComponent, ChildComponent, ClientComponent, MarksPipe
  ],
  imports: [
    CommonModule,
    ClientiRoutingModule,
    MaterialModule,
  ],
  exports: [
    MarksPipe,
  ]
})
export class ClientiModule { }
