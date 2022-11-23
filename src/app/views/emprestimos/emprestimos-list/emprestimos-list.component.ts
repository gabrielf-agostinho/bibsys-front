import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/services/aluno.service';
import { EmprestimoService } from 'src/app/services/emprestimo.service';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-emprestimos-list',
  templateUrl: './emprestimos-list.component.html',
  styleUrls: ['./emprestimos-list.component.css']
})
export class EmprestimosListComponent implements OnInit {

  emprestimos: any;

  constructor(
    public emprestimoService: EmprestimoService,
    public alunoService: AlunoService,
    public livroService: LivroService,
  ) {
    this.getEmprestimos();
  }

  ngOnInit(): void { }

  getEmprestimos() {
    this.emprestimoService.getAll().subscribe(data => {
      this.emprestimos = data;
    });
  };

  convertDate(date: any) {
    date = date.substring(0, 10);

    var ano = date.split("-")[0];
    var mes = date.split("-")[1];
    var dia = date.split("-")[2];

    return ("0" + dia).slice(-2) + '-' + ("0" + mes).slice(-2) + '-' + ano;
  }

  checkOk(devolvido: boolean) {
    if (devolvido)
      return true

    return false;
  }

  checkAtrasado(devolvido: boolean, data: any) {
    if (!devolvido && data < new Date().toISOString().slice(0, 10))
      return true;

    return false;
  }
}
