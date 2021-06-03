import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultadoFinalComponent } from './resultado-final.component';

const routes: Routes = [{ path: '', component: ResultadoFinalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultadoFinalRoutingModule { }
