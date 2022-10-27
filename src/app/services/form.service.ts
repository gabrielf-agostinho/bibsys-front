import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  public showErrorMessage(form: FormGroup, formControlName: string): boolean {
    return form.controls[formControlName].invalid && form.controls[formControlName].touched;
  }
}
