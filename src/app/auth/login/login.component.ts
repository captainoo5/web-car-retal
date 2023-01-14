import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 hide = true
 loginForm! : FormGroup
  constructor(private fb: FormBuilder,private router: Router,)  { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password : ['', Validators.required],
    })
  }

  login(){
    this.router.navigateByUrl('/app')
  }

  signUp(){
    this.router.navigateByUrl('/registration')
  }

}
