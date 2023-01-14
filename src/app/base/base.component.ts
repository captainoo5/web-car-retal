import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigateByUrl('/login')
  }

}
