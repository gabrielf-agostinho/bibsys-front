import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ToasterComponent } from './toaster/toaster.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { BaseListComponent } from './base-list/base-list.component';
import { BaseFormComponent } from './base-form/base-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormHeaderComponent } from './base-form/form-header/form-header.component';
import { FormFooterComponent } from './base-form/form-footer/form-footer.component';

@NgModule({
  declarations: [
    MenuComponent,
    ToasterComponent,
    BaseListComponent,
    BaseFormComponent,
    FormHeaderComponent,
    FormFooterComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    MenuComponent,
    ToasterComponent,
    BaseListComponent,
    BaseFormComponent
  ]
})
export class CoreModule { }
