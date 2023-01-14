import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { routes } from './base-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { CarsComponent } from '../component/cars/cars.component';
import { SettingsComponent } from '../component/settings/settings.component';
import { PaymentComponent } from '../component/payment/payment.component';
import { StatusComponent } from '../component/status/status.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { UserManagementComponent } from '../component/user-management/user-management.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    BaseComponent,
    DashboardComponent,
    CarsComponent,
    SettingsComponent,
    PaymentComponent,
    StatusComponent,
    UserManagementComponent,
   
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule
  ]
})
export class BaseModule { }
