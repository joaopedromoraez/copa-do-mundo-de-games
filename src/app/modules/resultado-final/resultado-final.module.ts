import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadoFinalRoutingModule } from './resultado-final-routing.module';
import { ResultadoFinalComponent } from './resultado-final.component';
import { TorneioComponent } from './torneio/torneio.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ResultadoFinalComponent,
    TorneioComponent
  ],
  imports: [
    CommonModule,
    ResultadoFinalRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class ResultadoFinalModule { }
