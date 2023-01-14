import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/match-helper';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  hide = true
  hide1 = true
  hide2 = true
  passwordForm! : FormGroup
  constructor(private fb: FormBuilder,private router: Router,) { }

  ngOnInit(): void {
    this.passwordForm = this.fb.group({
      oldpassword: ['', Validators.required],
      newpassword: ['', Validators.required],
      confirmpassword : ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      name: ['', Validators.required],
      id : ['', Validators.required]

    },
    {
      validator: MustMatch("newpassword", "confirmpassword"),
    })
  }

  password(){

  }

  }



  


   

