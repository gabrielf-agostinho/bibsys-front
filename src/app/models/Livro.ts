import { ILivro } from "./interfaces/ILivro";

export class Livro implements ILivro {
  constructor(nome: string, autor: string, editora: string, genero: string, estoque: number, id?: number | undefined) {
    this.id = id;
    this.nome = nome,
    this.autor = autor,
    this.editora = editora,
    this.genero = genero,
    this.estoque = estoque
  }

  get id(): number | undefined {
    return this.id;
  }

  set id (id: number | undefined) {
    this.id = id;
  }

  get nome(): string {
    return this.nome
  }

  set nome(nome: string) {
    this.nome = nome;
  }

  get autor(): string {
    return this.autor;
  }

  set autor(autor: string) {
    this.autor = autor;
  }

  get editora(): string {
    return this.editora;
  }

  set editora(editora: string) {
    this.editora = editora;
  }

  get genero(): string {
    return this.genero;
  }

  set genero(genero: string) {
    this.genero = genero;
  }

  get estoque(): number {
    return this.estoque;
  }

  set estoque(estoque: number) {
    this.estoque = estoque;
  }
}