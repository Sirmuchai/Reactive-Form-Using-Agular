import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { Comment } from 'src/app/inteface/post/comment';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  myPosts!: Observable<Comment[]>;
    
  private myComment: Comment = {
    'userId': 10,    
    'title': 'I wrote this',
    'body': 'Nasema hivo tu'
    }

  constructor(private productService: ProductService){}


  ngOnInit(): void {
    
    this.onGetProducts();
    this.onCreateComment();
    this.onGetComment();
    this.onGetPost(); 
  }

  onGetProducts(): void{
    this.productService.getProducts().subscribe(
      (response)=> console.log(response),
      (error:any)=>console.log(error),
      () => console.log('Done getting products')
      );
  }
  
  onGetComment(): void{
    this.productService.getComment().subscribe(
      (response)=> console.log(response),
      (error:any)=>console.log(error),
      () => console.log('Done getting Comment')
      );

  }

  onCreateComment(): void{
    this.productService.createComment(this.myComment).subscribe(
      (response)=> console.log(response),
      (error:any)=>console.log(error),
      () => console.log('Done Creating comment')
      );

  }

  onGetPost(){
    this.myPosts =this.productService.getComment();
    }



}
