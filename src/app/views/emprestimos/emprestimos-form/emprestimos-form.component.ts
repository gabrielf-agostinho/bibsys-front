import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from 'src/app/services/aluno.service';
import { EmprestimoService } from 'src/app/services/emprestimo.service';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-emprestimos-form',
  templateUrl: './emprestimos-form.component.html',
  styleUrls: ['./emprestimos-form.component.css']
})
export class EmprestimosFormComponent implements OnInit {
  emprestimo: any = {
    idLivro: null,
    idAluno: null,
    dataEmprestimo: null,
    dataDevolucao: null,
    devolvido: false
  }

  id: any;
  alunos: any;
  livros: any;

  constructor(
    public emprestimoService: EmprestimoService,
    public alunoService: AlunoService,
    public livroService: LivroService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.id = params.id;

      if (this.id) {
        emprestimoService.getById(this.id).subscribe(data => {
          data.data_emprestimo = data.data_emprestimo.substring(0, 10);
          data.data_devolucao = data.data_devolucao.substring(0, 10);

          this.emprestimo = data;

          console.log('emprestimo', this.emprestimo)
        })
      }
    });
  }

  ngOnInit(): void {
    this.getAlunos();
    this.getLivros();
  }

  onSubmit(form: any) {
    if (this.id) {     
      var id: number = +this.id; 
      let update = {
        idLivro: this.emprestimo.id_livro,
        idAluno: this.emprestimo.id_aluno,
        dataEmprestimo: this.emprestimo.data_emprestimo,
        dataDevolucao: this.emprestimo.data_devolucao, 
        devolvido: this.emprestimo.devolvido,
        id: id
      };

      this.emprestimoService.put(update).subscribe(data => {
        this.router.navigate(['/emprestimos']);
      });
    } else {
      this.emprestimoService.post(form.form.value).subscribe(data => { });

      setTimeout(() => {
        this.router.navigate(['/emprestimos']);
      }, 500)
    }
  }

  deletar() {
    this.emprestimoService.delete(this.id).subscribe(data => {
      this.router.navigate(['/emprestimos']);
    });
  }

  getAlunos() {
    this.alunoService.getAll().subscribe(data => {
      this.alunos = data;
    });
  }

  getLivros() {
    this.livroService.getAll().subscribe(data => {
      this.livros = data;
    });
  }

}
