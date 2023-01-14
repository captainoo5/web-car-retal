import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { PaynowComponent } from './car/rent-now/paynow/paynow.component';
import { CustomerBaseComponent } from './customer-base.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerBaseComponent,
    children:[
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {
        path:'payment',
        component:PaymentComponent
      },
      {
        path:'car',
        component: CarComponent
      },
      {
        path:'profile',
        component: ProfileComponent
      },
      {
        path:'paymow',
        component: PaynowComponent
      }


    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerBaseRoutingModule { }
