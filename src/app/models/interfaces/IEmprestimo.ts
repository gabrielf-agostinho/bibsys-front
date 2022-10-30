export interface IEmprestimo {
  id?: number | undefined
  idLivro: number;
  idAluno: number;
  dataEmprestimo: Date;
  dataDevolucao: Date;
  devolvido: boolean;
}