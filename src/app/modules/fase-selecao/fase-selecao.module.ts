import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaseSelecaoRoutingModule } from './fase-selecao-routing.module';
import { FaseSelecaoComponent } from './fase-selecao.component';
import { Lambda3Service } from './service/lambda3.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FaseSelecaoComponent
  ],
  imports: [
    CommonModule,
    FaseSelecaoRoutingModule,
    HttpClientModule
  ],
  providers: [
    Lambda3Service,
  ]
})
export class FaseSelecaoModule { }
