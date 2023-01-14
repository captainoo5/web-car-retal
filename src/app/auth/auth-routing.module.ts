import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { LoginComponent } from './login/login.component';
import { RegistrationCustomerComponent } from './registration-customer/registration-customer.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {

    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'prefix'
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'customer-registration',
        component: RegistrationCustomerComponent
      },
      {
        path: 'customer-login',
        component: CustomerLoginComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
