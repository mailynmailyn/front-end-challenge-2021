import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-components',
  templateUrl: './form-components.component.html',
  styleUrls: ['./form-components.component.css']
})
export class FormComponentsComponent implements OnInit {

  constructor() {
    this.name = "";
    this.email = "";
    this.phoneNumber = "";
    this.health = "";
    this.dietary = "";
   }

  //missing values, unsure how to save drop down lists
  public name :string;
  public email :string;
  public phoneNumber :string;
  public health :string;
  public dietary :string;

  ngOnInit(): void {
  }

  onSubmit(form: { value: any; valid: any;}){
    //required submit operations (ensure name and email are entered)
    if(form.valid){
    console.log(form.value);
    console.log(form.valid);
    }
  }
}
