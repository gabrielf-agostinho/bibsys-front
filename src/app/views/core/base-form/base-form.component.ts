import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService } from 'src/app/services/toaster.service';
import { BaseService } from "../../../services/base.service";
import { firstValueFrom } from 'rxjs';

@Component({
  template: '',
  styles: ['']
})
export class BaseFormComponent<T> implements OnInit {

  @Output()
  onReturn = new EventEmitter<any>();

  data: any;
  dataChanged: boolean = false;
  form: FormGroup | undefined;
  formControlClass: string = '';
  newRecord: boolean = false;
  readOnly: boolean = false;

  constructor(
    public activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    public router: Router,
    public service: BaseService<T>,
    public toasterService: ToasterService
  ) { }

  ngOnInit(): void {
    this.buildForm();

    const id: number = this.activatedRoute.snapshot.params['id'] as number;

    if (id) {
      this.getFormData(id);
      this.blockForm(true);
      this.newRecord = false;
    }
    else {
      this.blockForm(false);
      this.newRecord = true;
    }
  }

  private buildForm(): void { }

  private async getFormData(id: number): Promise<void> {
    try {
      this.data = await firstValueFrom(this.service.getById(id));
      this.patchValue();
    }
    catch {
      this.notFoundError();
    }
  }

  private patchValue(): void {
    this.form?.patchValue(this.data);
  }

  private notFoundError(): void {
    this.showErrorMessage('Registro não encontrado');
    this.navigateTo('..');
  }

  private navigateTo(path: string = '..'): void {
    this.router.navigate([path], {
      relativeTo: this.activatedRoute,
      queryParams: { reload: this.dataChanged }
    })
  }

  private showErrorMessage(message: string) {
    this.toasterService.show('Houve um erro!', message);
  }

  private showSuccessMessage(message: string) {
    this.toasterService.show('Salvo com sucesso', message);
  }

  private blockForm(readOnly: boolean): void {
    this.readOnly = readOnly;

    if (readOnly)
      this.formControlClass = 'form-control-plaintext';
    else
      this.formControlClass = 'form-control';
  }

  public onSubmit(data: any = this.form?.getRawValue()): void {
    if (this.form?.invalid) {
      this.form.markAllAsTouched();
      const invalidMessage: string = this.getInvalidMessage();
      this.showErrorMessage(invalidMessage);
      return;
    }

    if (data.id)
      this.update(data);
    else
      this.save(data);
  }

  private getInvalidMessage(): string {
    const invalidControls: Array<string> = this.getInvalidControls();

    return `Os campos ${invalidControls.join(", ").toString()} estão inválidos. Verifique!`;
  }

  private getInvalidControls(): Array<string> {
    const invalidControls: Array<string> = [];
    const controls = this.form?.controls;

    for (const control in controls) {
      if (controls[control].invalid)
        invalidControls.push(control);
    }

    return invalidControls;
  }

  private backendErrorHandler(error: any): void {
    this.showErrorMessage(error.message);
    this.form?.markAllAsTouched();
  }

  private save(data: any): void {
    this.service.post(data).subscribe({
      next: (dataSaved) => {
        this.dataChanged = true;
        this.showSuccessMessage('O registro foi salvo com sucesso!');

        if (dataSaved.id)
          this.navigateTo(`../${dataSaved.id}`);

        this.onReturn.emit(dataSaved);
      },
      error: (error) => {
        this.backendErrorHandler(error);
        this.onReturn.emit(false);
      }
    })
  }

  private update(data: any): void {
    this.service.put(data).subscribe({
      next: (dataSaved) => {
        this.dataChanged = true;
        this.showSuccessMessage('O registro foi atualizado com sucesso!');

        this.navigateTo(`..`);

        this.onReturn.emit(dataSaved);
      },
      error: (error) => {
        this.backendErrorHandler(error);
        this.onReturn.emit(false);
      }
    })
  }

  public delete(id: number): void {
    this.service.delete(id).subscribe({
      next: () => {
        this.dataChanged = true;
        this.showSuccessMessage('O registro foi removido com sucesso!');
        this.navigateTo('..')
      },
      error: (error) => {
        this.backendErrorHandler(error);
      }
    })
  }
}
