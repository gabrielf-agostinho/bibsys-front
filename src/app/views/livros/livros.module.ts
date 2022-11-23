import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosListComponent } from './livros-list/livros-list.component';
import { LivrosFormComponent } from './livros-form/livros-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LivrosListComponent,
    LivrosFormComponent
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    FormsModule
  ]
})
export class LivrosModule { }
