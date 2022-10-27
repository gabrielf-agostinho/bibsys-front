import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestimosFormComponent } from './emprestimos-form.component';

describe('EmprestimosFormComponent', () => {
  let component: EmprestimosFormComponent;
  let fixture: ComponentFixture<EmprestimosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmprestimosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmprestimosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
