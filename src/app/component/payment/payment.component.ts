import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  displayedColumns: string[] = ['customer', 'description', 'amount', 'date','time',];
  listData!: MatTableDataSource<any>

  paylist:any= [
    {customer: "admin@gmail.com", description: 'TNF-ADMIN/AMT:NGN20,000', amount: '#20,000', date: '20/09/2022',time:'3days'},
  ];
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.listData = new MatTableDataSource(this.paylist)
  }
  
  filter(key: string){
    this.listData.filter = key
  }
}