import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pessoa' },
  {
    path: 'pessoa',
    loadChildren: () =>
      import('./pessoa/pessoa.module').then((m) => m.PessoaModule),
  },
  {
    path: 'empresas',
    loadChildren: () =>
      import('./empresas/empresas.module').then((m) => m.EmpresasModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
