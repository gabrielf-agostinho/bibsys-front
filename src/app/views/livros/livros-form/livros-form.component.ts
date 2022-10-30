import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from 'src/app/models/Livro';
import { LivroService } from 'src/app/services/livro.service';
import { ToasterService } from 'src/app/services/toaster.service';
import { BaseFormComponent } from '../../core/base-form/base-form.component';

@Component({
  selector: 'app-livros-form',
  templateUrl: './livros-form.component.html',
  styleUrls: ['./livros-form.component.css']
})
export class LivrosFormComponent extends BaseFormComponent<Livro>  {

  constructor(
    activatedRoute: ActivatedRoute,
    protected livroService: LivroService,
    formBuilder: FormBuilder,
    router: Router,
    toasterService: ToasterService
  ) { 
    super(activatedRoute, formBuilder, router, livroService, toasterService)
  }

}
