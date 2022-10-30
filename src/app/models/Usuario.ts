import { IUsuario } from "./interfaces/IUsuario";

export class Usuario implements IUsuario {
  constructor(login: string, senha: string, id?: number | undefined) {
    this.id = id;
    this.login = login;
    this.senha = senha;
  }

  get id(): number {
    return this.id;
  }

  set id(id: number | undefined) {
    this.id = id
  }

  get login(): string {
    return this.login;
  }

  set login(login: string) {
    this.login = login;
  }

  get senha(): string {
    return this.senha;
  }

  set senha(senha: string) {
    this.senha = senha;
  }
}
