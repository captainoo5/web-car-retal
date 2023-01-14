import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    displayedColumns: string[] = ['name','user','email', 'phone','number','car','status','icon'];
    listData!: MatTableDataSource<any>

    userList:any =[
      {name:"1",user:"Muhammed",email:"#6789.00", phone: "08129500624" , number: "De43tsd" , car: "3" ,status:"ACTIVE", icon: "" },
      {name:"2",user:"kabir",email:"#6789.00", phone: "08129500624" , number: "De43tsd" , car: "5" ,status:"INACTIVE", icon: "" },
      {name:"3",user:"kabir",email:"#6789.00", phone: "08129500624" , number: "De43tsd" , car: "4" ,status:"INACTIVE", icon: "" },
      {name:"4",user:"musa",email:"#3457.00", phone: "08129500624" , number: "yed23xt" , car: "6" ,status:"ACTIVE", icon: "" },
    ];
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.listData = new MatTableDataSource(this.userList)

  }
}

