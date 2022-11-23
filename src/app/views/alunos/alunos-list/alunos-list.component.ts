import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-alunos-list',
  templateUrl: './alunos-list.component.html',
  styleUrls: ['./alunos-list.component.css']
})
export class AlunosListComponent implements OnInit {

  alunos: any;

  constructor(
    public alunoService: AlunoService 
  ) { 
    this.getUsuarios();
  }

  ngOnInit(): void {}

  getUsuarios() {
    this.alunoService.getAll().subscribe(data => {
      this.alunos = data;
    });
  };
}
