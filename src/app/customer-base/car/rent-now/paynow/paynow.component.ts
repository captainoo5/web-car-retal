import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-paynow',
  templateUrl: './paynow.component.html',
  styleUrls: ['./paynow.component.scss']
})
export class PaynowComponent implements OnInit {
payForm: FormGroup<any>;

  constructor(private fb: FormBuilder,
    ) { }

  ngOnInit(): void {

  }

}
