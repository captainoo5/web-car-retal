import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from '../component/cars/cars.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { SettingsComponent } from '../component/settings/settings.component';
import { BaseComponent } from './base.component';
import { PaymentComponent } from '../component/payment/payment.component';
import { StatusComponent } from '../component/status/status.component';
import { UserManagementComponent } from '../component/user-management/user-management.component';
// import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '', component: BaseComponent,
    children:[
      {
        path:'dashboard', component: DashboardComponent,
      },
      {
        path: 'cars', component: CarsComponent,
      },
      {
        path: 'settings', component: SettingsComponent,
      },
      {
        path: 'payment', component: PaymentComponent ,
      },
      {
        path: 'status', component: StatusComponent,
      },
      {
        path: 'user-management', component: UserManagementComponent,
      }
    ]
  },
]
