import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmprestimosRoutingModule } from './emprestimos-routing.module';
import { EmprestimosListComponent } from './emprestimos-list/emprestimos-list.component';
import { EmprestimosFormComponent } from './emprestimos-form/emprestimos-form.component';


@NgModule({
  declarations: [
    EmprestimosListComponent,
    EmprestimosFormComponent
  ],
  imports: [
    CommonModule,
    EmprestimosRoutingModule
  ]
})
export class EmprestimosModule { }
