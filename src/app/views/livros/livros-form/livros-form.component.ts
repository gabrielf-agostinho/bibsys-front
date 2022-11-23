import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livros-form',
  templateUrl: './livros-form.component.html',
  styleUrls: ['./livros-form.component.css']
})
export class LivrosFormComponent implements OnInit {
  livro: any = {
    nome: null,
    autor: null,
    editora: null,
    genero: null,
    estoque: null,
    id: null
  }

  id: any;

  constructor(
    public livroService: LivroService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.id = params.id;

      if (this.id) {
        livroService.getById(this.id).subscribe(data => {
          this.livro = data;
        })
      }
    });
  }

  ngOnInit(): void {

  }

  onSubmit(form: any) {
    if (this.id) {
      form.form.value.id = this.id;
      
      this.livroService.put(form.form.value).subscribe(data => {
        this.router.navigate(['/livros']);
      });
    } else {
      this.livroService.post(form.form.value).subscribe(data => {
        this.router.navigate(['/livros']);
       });
    }
  }

  deletar() {
    this.livroService.delete(this.id).subscribe(data => {
      this.router.navigate(['/livros']);
    });
  }

}
