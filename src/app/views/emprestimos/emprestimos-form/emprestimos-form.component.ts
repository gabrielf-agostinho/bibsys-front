import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Emprestimo } from 'src/app/models/Emprestimo';
import { EmprestimoService } from 'src/app/services/emprestimo.service';
import { ToasterService } from 'src/app/services/toaster.service';
import { BaseFormComponent } from '../../core/base-form/base-form.component';

@Component({
  selector: 'app-emprestimos-form',
  templateUrl: './emprestimos-form.component.html',
  styleUrls: ['./emprestimos-form.component.css']
})
export class EmprestimosFormComponent extends BaseFormComponent<Emprestimo>  {

  constructor(
    activatedRoute: ActivatedRoute,
    protected emprestimosService: EmprestimoService,
    formBuilder: FormBuilder,
    router: Router,
    toasterService: ToasterService
  ) {
    super(activatedRoute, formBuilder, router, emprestimosService, toasterService)
  }

}
