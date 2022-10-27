import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aluno } from '../models/Aluno';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AlunoService extends BaseService<Aluno> {

  constructor(http: HttpClient) {
    super(http, 'alunos');
  }
}
