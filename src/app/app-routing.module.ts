import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/menu/pages/home/home.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },
  {
    path: 'user',
    loadChildren: () => import('./features/user-manager/user-manager.module').then(m => m.UserManagerModule)
  },
  {
    path: '**', // cualquier cosa
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
