import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaseSelecaoRoutingModule } from './fase-selecao-routing.module';
import { FaseSelecaoComponent } from './fase-selecao.component';


@NgModule({
  declarations: [
    FaseSelecaoComponent
  ],
  imports: [
    CommonModule,
    FaseSelecaoRoutingModule
  ]
})
export class FaseSelecaoModule { }
