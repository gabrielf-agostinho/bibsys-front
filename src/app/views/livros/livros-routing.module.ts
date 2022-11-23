import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrosFormComponent } from './livros-form/livros-form.component';
import { LivrosListComponent } from './livros-list/livros-list.component';

const routes: Routes = [
  { path: '', component: LivrosListComponent },
  { path: 'novo', component: LivrosFormComponent },
  { path: ':id', component: LivrosFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule { }
