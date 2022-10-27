import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NonAuthUserGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  canActivate(): boolean {
    if (this.authService.isUsuarioLogado) {
      this.router.navigate(['']);
      return false;
    }
    else {
      return true;
    }
  }
  
}
