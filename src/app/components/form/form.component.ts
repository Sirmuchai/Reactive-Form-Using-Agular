import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {


registerForm = new FormGroup({
  firstName:new FormControl(''),
  lastName:new FormControl('')
  }
)
onSubmitRegisterForm(){
  console.log(this.registerForm.value);  
}
}
