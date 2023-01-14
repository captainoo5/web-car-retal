import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AddCarsComponent } from './add-cars/add-cars.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ChangeStatusComponent } from './../status/change-status/change-status.component';



@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  displayedColumns: string[] = ['vehicle ', 'year', 'name', 'model', 'color', 'number','rent', 'status', 'icon'];
  listData!: MatTableDataSource<any>

  carList:any= [
    {vehicle: "Gef124", year: '2003', name: 'Tahir', model: 'Corolla', color:'Balck', chassis:'D234a' ,rent:'#20000',status:'Active', icon:''},
  ];
  

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.listData = new MatTableDataSource(this.carList)
  }

  addCard(row: any){
    let dialogConfig = new MatDialogConfig;
    dialogConfig.maxHeight = '90vh'
    dialogConfig.minHeight = '30vh'
    dialogConfig.maxWidth = '40%'
    dialogConfig.data = row
    // dialogConfig.minWidth = '30%'


    

    this.dialog.open(AddCarsComponent, dialogConfig)
    .afterClosed().subscribe({
      next: (res: any)=>{
        if(res){
          console.log(res, 'the data');
          this.carList.push(res)
          this.listData = new MatTableDataSource(this.carList)
          
        }
      }
    })
  }
  
  delete(row: any){
    console.log(row)
    this.carList.splice(row.vehicle, 1)
    this.listData = new MatTableDataSource(this.carList)
  }

  filter(key: string){
    this.listData.filter = key
  }

  changeStatus(row: any){
    let dialogConfig = new MatDialogConfig;
    dialogConfig.maxWidth = '100%'
    dialogConfig.minWidth = '30%'
    dialogConfig.data = row


    this.dialog.open(ChangeStatusComponent, dialogConfig)
    .afterClosed().subscribe({
      next: (res: any)=>{
        if(res){
          this.carList.filter((el: any) => {
            if(res.car == el.car){
              el.status = res.status
            }
          })
          this.listData= new MatTableDataSource(this.carList)
        }
      }
    })
  }
   
}
