import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosListComponent } from './livros-list/livros-list.component';
import { LivrosFormComponent } from './livros-form/livros-form.component';


@NgModule({
  declarations: [
    LivrosListComponent,
    LivrosFormComponent
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule
  ]
})
export class LivrosModule { }
