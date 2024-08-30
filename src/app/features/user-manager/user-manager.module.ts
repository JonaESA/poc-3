import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagerRoutingModule } from './user-manager-routing.module';
import { UserListComponent } from './pages/user-list/user-list.component';
import { DxButtonModule, DxDataGridModule, DxFormModule, DxToastModule } from 'devextreme-angular';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent,
    UserAddComponent,
    UserUpdateComponent
  ],
  imports: [
    CommonModule,
    UserManagerRoutingModule,
    DxDataGridModule,
    DxButtonModule,
    DxFormModule,
    DxToastModule
  ]
})
export class UserManagerModule { }
