import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddUserComponent } from './add-user/add-user.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  displayedColumns: string[] = ['name','user','email', 'phone','number','car','status','icon'];
  listData!: MatTableDataSource<any>

  userList:any =[
    {name:"Tahir",user:"Admin",email:"admin@gmail.com", phone: "08129500624" , number: "De43tsd" , car: "3" ,status:"ACTIVE", icon: "" },
    {name:"Abdullahi",user:"Car Owner",email:"admin@gmail.com", phone: "08129500624" , number: "De43tsd" , car: "5" ,status:"INACTIVE", icon: "" },
    {name:"Musa",user:"Car Owner",email:"admin@gmail.com", phone: "08129500624" , number: "De43tsd" , car: "4" ,status:"INACTIVE", icon: "" },
    {name:"Wasila",user:"Car Owner",email:"wasila@gmail.com", phone: "08129500624" , number: "yed23xt" , car: "6" ,status:"ACTIVE", icon: "" },
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.listData = new MatTableDataSource(this.userList)
  }
  

  adduser(row: any){
    let dialogConfig = new MatDialogConfig;
    dialogConfig.maxHeight = '90vh'
    dialogConfig.minHeight = '30vh'
    dialogConfig.maxWidth = '40%'
    dialogConfig.data = row


     

    this.dialog.open(AddUserComponent, dialogConfig)
    .afterClosed().subscribe({
      next: (res: any)=>{
        if(res){
          console.log(res, 'the data');
          this.userList.push(res)
          this.listData = new MatTableDataSource(this.userList)
          
        }
      }
    })
  }
  

  filter(key: string){
    this.listData.filter = key
  }
}
