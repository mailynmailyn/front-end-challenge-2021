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

  public name :string;
  public email :string;
  public phoneNumber :string;
  public health :string;
  public dietary :string;

  ngOnInit(): void {
  }

  onSubmit(form: { value: any; }){
    //required submit operations
    console.log(form.value);
  }
}
