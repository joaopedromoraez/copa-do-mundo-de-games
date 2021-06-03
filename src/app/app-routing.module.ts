import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'fase-selecao',
    pathMatch: 'full'
  },
  {
    path: 'fase-selecao',
    loadChildren: () => import('./modules/fase-selecao/fase-selecao.module').then(m => m.FaseSelecaoModule)
  },
  {
    path: 'resultado-final',
    loadChildren: () => import('./modules/resultado-final/resultado-final.module').then(m => m.ResultadoFinalModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
