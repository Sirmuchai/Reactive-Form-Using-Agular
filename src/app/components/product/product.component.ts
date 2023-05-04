import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.onGetProducts();
  }

  onGetProducts(): void{
    this.productService.getProducts().subscribe(
      (response)=> console.log(response),
      (error:any)=>console.log(error),
      () => console.log('Done getting products')
      );
  }

}
