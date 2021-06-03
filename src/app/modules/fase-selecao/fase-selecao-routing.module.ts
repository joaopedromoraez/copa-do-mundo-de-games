import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaseSelecaoComponent } from './fase-selecao.component';

const routes: Routes = [{ path: '', component: FaseSelecaoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaseSelecaoRoutingModule { }
