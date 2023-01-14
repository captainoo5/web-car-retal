import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { CustomerBaseRoutingModule } from './customer-base-routing.module';
import { CustomerBaseComponent } from './customer-base.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarComponent } from './car/car.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentComponent } from './payment/payment.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RentNowComponent } from './car/rent-now/rent-now.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PaynowComponent } from './car/rent-now/paynow/paynow.component';

@NgModule({
  declarations: [
    CustomerBaseComponent,
    DashboardComponent,
    CarComponent,
    ProfileComponent,
    PaymentComponent,
    RentNowComponent,
    PaynowComponent,
    // PaynowComponent,

  ],
  imports: [
    CommonModule,
    CustomerBaseRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class CustomerBaseModule { }
