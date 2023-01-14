import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserManagementComponent } from '../user-management.component';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  UserForm! : FormGroup
  Userload={

    number:'',
    name:'',
    email:'',
    car:'',
    plate:'',
    status:'',
  }

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UserManagementComponent>,
    @Inject(MAT_DIALOG_DATA) public selectedRow: any
  ) { }

  ngOnInit(): void {
    console.log(this.selectedRow);

    if(this.selectedRow == ''){
      this.UserForm = this.fb.group({
        'number': [''],
        'name': [''],
        'email': [''],
        'car': [''],
        'plate': [''],
        'status':[''],
      })
    }

    else{
      this.UserForm = this.fb.group({
        'number': [this.selectedRow.number],
        'name': [this.selectedRow.name],
        'email': [this.selectedRow.email],
        'car': [this.selectedRow.car],
        'plate': [this.selectedRow.plate],
        'status': [this.selectedRow.status],
      })
    }
  }

  addCar(){
    this.Userload.name = this.UserForm.get('name')?.value
    this.Userload.email = this.UserForm.get('email')?.value
    this.Userload.number = this.UserForm.get('number')?.value
    this.Userload.car = this.UserForm.get('car')?.value
    this.Userload.plate = this.UserForm.get('plate')?.value
    this.Userload.status = this.UserForm.get('status')?.value
    console.log(this.Userload, 'the User parameters');


    this.dialogRef.close(this.Userload)
  }
  close(){
    this.dialogRef.close()
  }

  editCar(){
    this.dialogRef.close()
  }
}


