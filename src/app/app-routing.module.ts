import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthUserGuard } from './guards/auth-user.guard';
import { NonAuthUserGuard } from './guards/non-auth-user.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthUserGuard],
    loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'login',
    canActivate: [NonAuthUserGuard],
    loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'alunos',
    canActivate: [AuthUserGuard],
    loadChildren: () => import('./views/alunos/alunos.module').then(m => m.AlunosModule)
  },
  {
    path: 'livros',
    canActivate: [AuthUserGuard],
    loadChildren: () => import('./views/livros/livros.module').then(m => m.LivrosModule)
  },
  {
    path: 'emprestimos',
    canActivate: [AuthUserGuard],
    loadChildren: () => import('./views/emprestimos/emprestimos.module').then(m => m.EmprestimosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
