import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-ng',
  templateUrl: './ng.component.html',
  styleUrls: ['./ng.component.css']
})
export class NgComponent implements OnInit {

  constructor(private _form:FormBuilder) { }


  userForm = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(4)]),
    email: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      postalcode: new FormControl(null,Validators.pattern('^[1-9][0-9]{4}'))
    })
  });

  ngOnInit() {

  }
  onSubmit(){
    console.log(this.userForm.value);
  }

}
