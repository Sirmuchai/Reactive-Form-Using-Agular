import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  

  objArray: Array<Post> =[
    {id:1, title: 'Post 1'},
    {id:2, title: 'Post 2'},
    {id:3, title: 'Post 3'},
    {id:4, title: 'Post 4'}
  ];

  addNew(){
    this.objArray.push({id:6, title:'Post 6'});
  }

  onDelete(index: number){
    this.objArray.splice(index, 1);
  }

}

export interface Post{
  id: number,
  title: String    
}
