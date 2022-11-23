import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosListComponent } from './alunos-list/alunos-list.component';

const routes: Routes = [
  { path: '', component: AlunosListComponent },
  { path: 'novo', component: AlunosFormComponent },
  { path: ':id', component: AlunosFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
