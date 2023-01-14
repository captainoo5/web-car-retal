import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RentNowComponent } from './rent-now/rent-now.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  cards: any = [
    {img: '/assets/img/car06.jpg', name: '2019 KIA', amount: 10000},
    {img: '/assets/img/car01.jpg', name: '2018 hilux', amount: 19000},
    {img: '/assets/img/car02.jpg', name: '2020 Ford', amount: 30000},
    {img: '/assets/img/car04.jpg', name: '2020 Toyota Corolla', amount: 15000},
    {img: '/assets/img/car05.jpg', name: '2019 Honda', amount: 18500},
    {img: '/assets/img/car06.jpg', name: '2020 KIA', amount: 10000},
    {img: '/assets/img/car05.jpg', name: '2020 Toyota Corolla', amount: 15000},
    {img: '/assets/img/car01.jpg', name: '2018 Hilux', amount: 19000},
    {img: '/assets/img/car02.jpg', name: '2020 Ford', amount: 30000},
    {img: '/assets/img/car05.jpg', name: '2019 Honda', amount: 18500},
    {img: '/assets/img/car02.jpg', name: '2019 KIA', amount: 10000},
    {img: '/assets/img/car02.jpg', name: '2020 Toyota Corolla', amount: 15000},
    {img: '/assets/img/car01.jpg', name: '2020 Ford', amount: 30000}
  ]

  ngOnInit(): void {

  }

  rentNow(row: any){
    let dialogConfig = new MatDialogConfig;
    dialogConfig.maxHeight = '90vh'
    dialogConfig.minHeight = '30vh'
    dialogConfig.maxWidth = '40%'

    dialogConfig.data = row

    this.dialog.open(RentNowComponent, dialogConfig)
  }
}
