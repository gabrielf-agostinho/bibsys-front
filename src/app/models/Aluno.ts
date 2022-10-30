import { IAluno } from "./interfaces/IAluno";

export class Aluno implements IAluno {
  constructor(nome: string, periodo: string, etapa: string, ano: number, id?: number | undefined) {
    this.id = id;
    this.nome = nome,
    this.periodo = periodo,
    this.etapa = etapa,
    this.ano = ano
  }

  get id(): number | undefined {
    return this.id;
  }

  set id(id: number | undefined) {
    this.id = id;
  }

  get nome(): string {
    return this.nome;
  }

  set nome(nome: string) {
    this.nome = nome
  }

  get periodo(): string {
    return this.periodo;
  }

  set periodo(periodo: string) {
    this.periodo = periodo;
  }

  get etapa(): string {
    return this.etapa;
  }

  set etapa(etapa: string) {
    this.etapa = etapa;
  }

  get ano(): number {
    return this.ano;
  }

  set ano(ano: number) {
    this.ano = ano;
  }
}