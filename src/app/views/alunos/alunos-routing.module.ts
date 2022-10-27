import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosListComponent } from './alunos-list/alunos-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AlunosListComponent,
    children: [
      {
        path: 'novo',
        pathMatch: 'full',
        component: AlunosFormComponent
      },
      {
        path: ':id',
        pathMatch: 'full',
        component: AlunosFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
