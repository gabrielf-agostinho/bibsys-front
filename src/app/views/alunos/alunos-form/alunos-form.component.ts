import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit {
  aluno: any = {
    nome: null,
    periodo: null,
    etapa: null,
    ano: null,
    id: null
  }

  id: any;

  constructor(
    public alunoService: AlunoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.id = params.id;

      if (this.id) {
        alunoService.getById(this.id).subscribe(data => {
          this.aluno = data;
        })
      }
    });
  }

  ngOnInit(): void {

  }

  onSubmit(form: any) {
    if (this.id) {
      form.form.value.id = this.id;
      
      this.alunoService.put(form.form.value).subscribe(data => {
        this.router.navigate(['/alunos']);
      });
    } else {
      this.alunoService.post(form.form.value).subscribe(data => { });

      setTimeout(() => {
        this.router.navigate(['/alunos']);
      }, 500)
    }
  }

  deletar() {
    this.alunoService.delete(this.id).subscribe(data => {
      this.router.navigate(['/alunos']);
    });
  }

}
