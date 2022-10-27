import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../../core/base-form/base-form.component';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent extends BaseFormComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
