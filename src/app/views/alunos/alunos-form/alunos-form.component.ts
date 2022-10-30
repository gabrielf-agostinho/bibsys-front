import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from 'src/app/models/Aluno';
import { AlunoService } from 'src/app/services/aluno.service';
import { ToasterService } from 'src/app/services/toaster.service';
import { BaseFormComponent } from '../../core/base-form/base-form.component';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent extends BaseFormComponent<Aluno> {

  constructor(
    activatedRoute: ActivatedRoute,
    protected alunoService: AlunoService,
    formBuilder: FormBuilder,
    router: Router,
    toasterService: ToasterService

  ) {
    super(activatedRoute, formBuilder, router, alunoService, toasterService);
  }

}
