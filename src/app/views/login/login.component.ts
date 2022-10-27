import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.createLoginForm();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public formService: FormService
  ) { }

  ngOnInit(): void { }

  private createLoginForm(): FormGroup {
    return this.formBuilder.group({
      login: [null, Validators.required],
      senha: [null, Validators.required],
    });
  }

  public onSubmit(): void {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid)
      this.authService.logar(this.loginForm.value);
  }
}
