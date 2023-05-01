import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  lastName: string | undefined;

  printClicked(){
    console.log("I have been clicked");
  }
//Data binding
  onKeyUp(firstname: any){
    console.log(firstname);
  }
//Two way data binding
registerForm = new FormGroup({
  firstName:new FormControl(''),
  lastName:new FormControl('')
  }
)
onSubmitRegisterForm(){
  console.log(this.registerForm.value);  
}
}
