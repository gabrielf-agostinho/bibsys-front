import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/Usuario';
import { ToasterService } from './toaster.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = environment.baseUrl;
  endpoint: string = 'auth';

  constructor(    
    private http: HttpClient,
    private toasterService: ToasterService,
    private router: Router
  ) { }

  public get isUsuarioLogado(): boolean {
    const usuario: string | null = localStorage.getItem('usuario')

    return !!usuario;
  }

  public logar(usuario: Usuario): void {
    this.http.post(`${this.baseUrl}/${this.endpoint}`, usuario).subscribe({
      next: () => {
        localStorage.setItem('usuario', window.btoa(JSON.stringify(usuario)));
        this.router.navigate(['']);
      },
      error: (error) => {
        this.toasterService.show('Houve um erro com a sua solicitação', error.message);
      }
    })
  }

  public deslogar(): void {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
