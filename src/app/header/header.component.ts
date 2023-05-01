import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  message:string = "Welcome to String Interpration in Types scripting using `{{}}` and property binding using `[]`"
  imgUrl:string = "https://www.shutterstock.com/image-vector/two-hands-creation-adam-design-600w-1838732326.jpg"

}
