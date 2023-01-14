import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m =>m.AuthModule),
  },
  {
    path: 'app',
    loadChildren: () => import('./base/base.module').then(m =>m.BaseModule),
  },
  {
    path: 'customer-base',
    loadChildren: () => import('./customer-base/customer-base.module').then(m => m.CustomerBaseModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
