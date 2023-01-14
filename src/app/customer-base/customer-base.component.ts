import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-base',
  templateUrl: './customer-base.component.html',
  styleUrls: ['./customer-base.component.scss']
})
export class CustomerBaseComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigateByUrl('/customer-login')
  }
}
