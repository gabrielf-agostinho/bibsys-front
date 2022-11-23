import { Component, OnInit } from '@angular/core';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livros-list',
  templateUrl: './livros-list.component.html',
  styleUrls: ['./livros-list.component.css']
})
export class LivrosListComponent implements OnInit {

  livros: any;

  constructor(
    public livroService: LivroService 
  ) { 
    this.getLivros();
  }

  ngOnInit(): void {
  }

  getLivros() {
    this.livroService.getAll().subscribe(data => {
      this.livros = data;
    });
  };

}
