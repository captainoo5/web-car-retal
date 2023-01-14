import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.scss']
})
export class ChangeStatusComponent implements OnInit {
  status: string = '';

  constructor(
    public dialogRef: MatDialogRef<ChangeStatusComponent>,
    @Inject(MAT_DIALOG_DATA) public selectedRow: any
  ) { }

  ngOnInit(): void {
    console.log(this.selectedRow);
  }

  changeStatus(){
    this.dialogRef.close({status: this.status, car: this.selectedRow})
  }


  close(){
    this.dialogRef.close()
  }
}
