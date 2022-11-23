import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmprestimosRoutingModule } from './emprestimos-routing.module';
import { EmprestimosListComponent } from './emprestimos-list/emprestimos-list.component';
import { EmprestimosFormComponent } from './emprestimos-form/emprestimos-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmprestimosListComponent,
    EmprestimosFormComponent
  ],
  imports: [
    CommonModule,
    EmprestimosRoutingModule,
    FormsModule
  ]
})
export class EmprestimosModule { }
