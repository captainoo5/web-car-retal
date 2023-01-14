import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-add-cars',
  templateUrl: './add-cars.component.html',
  styleUrls: ['./add-cars.component.scss']
})
export class AddCarsComponent implements OnInit {
  carForm! : FormGroup
  carload={
    vehicle:'',
    year:'',
    name:'',
    model:'',
    color:'',
    chassis:'',
    amount:'',
    status:'',
  }


  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddCarsComponent>,
    @Inject(MAT_DIALOG_DATA) public selectedRow: any
    ) { }

  ngOnInit(): void {
    console.log(this.selectedRow);

    if(this.selectedRow == ''){
      this.carForm = this.fb.group({
        'number': [''],
        'year': [''],
        'name': [''],
        'model': [''],
        'color': [''],
        'chassis' : [''],
        'amount': [''],
        'status' : [''],
      })
    }

    else{
      this.carForm = this.fb.group({
        'number': [this.selectedRow.vehicle],
        'year': [this.selectedRow.year],
        'name': [this.selectedRow.make],
        'model': [this.selectedRow.model],
        'color': [this.selectedRow.color],
        'chassis': [this.selectedRow.chassis],
        'amount': [this.selectedRow.amount],
        'status': [this.selectedRow.status],
      })
    }
  }

  addCar(){
    this.carload.vehicle = this.carForm.get('number')?.value
    this.carload.year = this.carForm.get('year')?.value
    this.carload.name = this.carForm.get('name')?.value
    this.carload.model = this.carForm.get('model')?.value
    this.carload.color = this.carForm.get('color')?.value
    this.carload.chassis = this.carForm.get('chassis')?.value
    this.carload.amount = this.carForm.get('amount')?.value
    this.carload.status = this.carForm.get('status')?.value
    console.log(this.carload, 'the car parameters');


    this.dialogRef.close(this.carload)
  }
  close(){
    this.dialogRef.close()
  }

  editCar(){
    this.dialogRef.close()
  }
}
