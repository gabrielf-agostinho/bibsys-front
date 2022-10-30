import { IEmprestimo } from "./interfaces/IEmprestimo";

export class Emprestimo implements IEmprestimo {
  constructor(idLivro: number, idAluno: number, dataEmprestimo: Date, dataDevolucao: Date, devolvido: boolean, id?: number | undefined) {
    this.id = id;
    this.idLivro = idLivro,
    this.idAluno = idAluno,
    this.dataEmprestimo = dataEmprestimo,
    this.dataDevolucao = dataDevolucao,
    this.devolvido = devolvido
  }

  get id(): number | undefined {
    return this.id;
  }

  set id(id: number | undefined) {
    this.id = id;
  }

  get idLivro(): number {
    return this.idLivro;
  }

  set idLivro(idLivro: number) {
    this.idLivro = idLivro;
  }

  get idAluno(): number {
    return this.idAluno;
  }

  set idAluno(idAluno: number) {
    this.idAluno = idAluno;
  }

  get dataEmprestimo(): Date {
    return this.dataEmprestimo;
  }

  set dataEmprestimo(dataEmprestimo: Date) {
    this.dataEmprestimo = dataEmprestimo;
  }

  get dataDevolucao(): Date {
    return this.dataDevolucao;
  }

  set dataDevolucao(dataDevolucao: Date) {
    this.dataDevolucao = dataDevolucao;
  }

  get devolvido(): boolean {
    return this.devolvido;
  }

  set devolvido(devolvido: boolean) {
    this.devolvido = devolvido;
  }
}