import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaseSelecaoRoutingModule } from './fase-selecao-routing.module';
import { FaseSelecaoComponent } from './fase-selecao.component';
import { Lambda3Service } from './services/lambda3.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    FaseSelecaoComponent
  ],
  imports: [
    CommonModule,
    FaseSelecaoRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
  ],
  providers: [
    Lambda3Service,
  ]
})
export class FaseSelecaoModule { }
