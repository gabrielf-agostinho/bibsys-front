import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmprestimosFormComponent } from './emprestimos-form/emprestimos-form.component';
import { EmprestimosListComponent } from './emprestimos-list/emprestimos-list.component';

const routes: Routes = [
  { path: '', component: EmprestimosListComponent },
  { path: 'novo', component: EmprestimosFormComponent },
  { path: ':id', component: EmprestimosFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmprestimosRoutingModule { }
