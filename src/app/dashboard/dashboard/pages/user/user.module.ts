import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserService } from 'src/app/services/user.service';
import { UserTableComponent } from './user-table/user-table.component';
import { UserFormComponent } from './user-form/user-form.component';



@NgModule({
  declarations: [
    UserComponent,
    UserTableComponent,
    UserFormComponent,
  ],

  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class UserModule { }
