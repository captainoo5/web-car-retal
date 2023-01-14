import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  hide = true
  RegistrationForm! : FormGroup;
  
     
  constructor( private fb: FormBuilder,private router:Router) { }
    
  ngOnInit(): void {
    this.RegistrationForm = this.fb.group({
         email: ['', Validators.compose([Validators.required, Validators.email])],
         password : ['', Validators.required],
         name: ['', Validators.required],
         id : ['', Validators.required]
    })
  }

  login(){
    this. router.navigateByUrl('/login')
  }
  logIn(){
    this.router.navigateByUrl('/login')
  }
}
