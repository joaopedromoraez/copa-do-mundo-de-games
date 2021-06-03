import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadoFinalRoutingModule } from './resultado-final-routing.module';
import { ResultadoFinalComponent } from './resultado-final.component';


@NgModule({
  declarations: [
    ResultadoFinalComponent
  ],
  imports: [
    CommonModule,
    ResultadoFinalRoutingModule
  ]
})
export class ResultadoFinalModule { }
