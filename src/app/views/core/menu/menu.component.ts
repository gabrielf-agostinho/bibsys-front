import { Component, OnInit } from '@angular/core';  
import { faStackExchange } from '@fortawesome/free-brands-svg-icons';
import { faUser, faBook, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public faBook = faBook;
  public faUser = faUser;
  public faStackExchange = faStackExchange;
  public faPowerOff = faPowerOff;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  public deslogar(): void {
    this.authService.deslogar();
  }
}
