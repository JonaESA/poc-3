import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'details/:id',
    component: UserDetailsComponent
  },
  {
    path: 'add',
    component: UserAddComponent
  },
  {
    path: 'update/:id',
    component: UserUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagerRoutingModule { }
