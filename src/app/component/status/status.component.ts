import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {  MatDialogConfig } from '@angular/material/dialog';
import { ChangeStatusComponent } from './change-status/change-status.component';



@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  displayedColumns: string[] = ['customer','name','date','return','model','color','status','icon'];
  statusData!: MatTableDataSource<any>

  statuslist:any=[
   {customer:"Wasila", name:"Tahir",  date:"01/10/2022",return:"06/10/2022", status:"FAULTY", color:"Black", model:"Corolla"},
   {customer:"Amina", name:"Musa",  date:"04/10/2022",return:"08/10/2022", status:"INACTIVE", color:"White", model:"Hillux"},
   {customer:"Ummi", name:"Abu",  date:"05/10/2022",return:"10/10/2022", status:"ACTIVE", color:"Grey", model:"Honda"},
   {customer:"Una", name:"Adam",  date:"06/10/2022",return:"06/10/2022", status:"ACTIVE", color:"Black", model:"Ford"},
   {customer:"Ada", name:"Abdul",  date:"06/10/2022",return:"07/10/2022", status:"FAULTY", color:"Green", model:"Nissan"},
   {customer:"Joe", name:"Yakub",  date:"06/10/2022",return:"09/10/2022", status:"INACTIVE", color:"Golden", model:"Camry"},
   {customer:"Azeez", name:"Ahmed",  date:"07/10/2022",return:"10/10/2022", status:"RESERVED", color:"Blue", model:"Kia"},
   {customer:"Awwal", name:"Faruq",  date:"08/10/2022",return:"11/10/2022", status:"FAULTY", color:"Black", model:"Kia"},
   {customer:"Muhammad", name:"Henry",  date:"09/10/2022",return:"16/10/2022", status:"ACTIVE", color:"Navy Blue", model:"Mazda"},
   {customer:"Lukman", name:"Muhammad",  date:"09/10/2022",return:"16/10/2022", status:"ACTIVE", color:"White", model:"Lexus"},
  ]
  
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.statusData = new MatTableDataSource(this.statuslist)
  }
  
  changeStatus(row: any){
    let dialogConfig = new MatDialogConfig;
    // dialogConfig.maxHeight = '90vh'
    // dialogConfig.minHeight = '50vh'
    dialogConfig.maxWidth = '100%'
    dialogConfig.minWidth = '30%'
    dialogConfig.data = row

    this.dialog.open(ChangeStatusComponent, dialogConfig)
    .afterClosed().subscribe({
      next: (res: any)=>{
        if(res){
          this.statuslist.filter((el: any) => {
            if(res.car == el){
              el.status = res.status
            }
          })
          this.statusData = new MatTableDataSource(this.statuslist)
        }
      }
    })
  }

  filter(key: string){
    this.statusData.filter = key
  }
}
