import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { AuthComponent } from './auth.component'; 
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { RegistrationCustomerComponent } from './registration-customer/registration-customer.component';

@NgModule({
  declarations: [
    AuthComponent,
    RegistrationComponent,
    LoginComponent,
    CustomerLoginComponent,
    RegistrationCustomerComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule
    
  ]
})
export class AuthModule { }
