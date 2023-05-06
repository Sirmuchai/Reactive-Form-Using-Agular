import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggeleSidebarForMe: EventEmitter<any> = new EventEmitter;


  ngOnInit(): void {

   }

  toggleSidebar(){
    this.toggeleSidebarForMe.emit();
  }

  
}
