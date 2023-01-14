import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCarsComponent } from './component/cars/add-cars/add-cars.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ChangeStatusComponent } from './component/status/change-status/change-status.component';
import { MatSelectModule } from '@angular/material/select';
import { AddUserComponent } from './component/user-management/add-user/add-user.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CustomerBaseComponent } from './customer-base/customer-base.component';

// import { UserManagementComponent } from './component/user-management/user-management.component';
@NgModule({
  declarations: [
    AppComponent,
    AddCarsComponent,
    ChangeStatusComponent,
    AddUserComponent,
    // CustomerBaseComponent
    // UserManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
