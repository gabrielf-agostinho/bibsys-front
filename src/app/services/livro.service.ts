import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livro } from '../models/Livro';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class LivroService extends BaseService<Livro> {

  constructor(http: HttpClient) { 
    super(http, 'livros');
  }
  
}
