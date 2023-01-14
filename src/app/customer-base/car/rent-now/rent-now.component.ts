import { Component, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaynowComponent } from './paynow/paynow.component';

@Component({
  selector: 'app-rent-now',
  templateUrl: './rent-now.component.html',
  styleUrls: ['./rent-now.component.scss']
})
export class RentNowComponent implements OnInit {
  dialogConfig: any;
close() {
throw new Error('Method not implemented.');
}
  rentForm! : FormGroup
  price: number=0
  rentload={
    vehicle:'',
    car:'',

  }
card: any;
  constructor(public dialog: MatDialog,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {

    console.log(this.data, 'car selected');
    this.rentForm = this.fb.group({
      'vehicle': [''],
      'car': [''],
      'pickup-date':[''],
      'end-date':[''],


    })
  }
  paynow(row: any){
    let dialogConfig = new MatDialogConfig;
    dialogConfig.maxHeight = '90vh'
    dialogConfig.minHeight = '30vh'
    dialogConfig.maxWidth = '40%'

    dialogConfig.data = row

    this.dialog.open(PaynowComponent, dialogConfig)
  }


   return(){
     this.dialogConfig.close()
   }
  calculatecost()
  {



    let start=this.rentForm.get('pickup-date')?.value
    let end=this.rentForm.get('end-date')?.value
    console.log(start,end)
     let diff=end-start
     let time = new Date(diff)
     let day = time.getDate()
    console.log(time)
     this.price=day*this.data.amount
      console.log(this.price)
     console.log(time.getDate());



      document.querySelector('output').innerHTML = `<p>you booked for the duration of <span>${day}</span> days and the total amount is ${diff}</p>`;

    }


  }

