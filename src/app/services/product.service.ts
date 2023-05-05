import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductResponse } from '../inteface/product-response';
import { Comment } from '../inteface/post/comment';
import { environment } from 'src/environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { 

  }

  getProducts(): Observable<ProductResponse>{
    return this.http.get<ProductResponse>('http://localhost:1337/api/products');
  }

  getComment(): Observable<Comment>{
    return this.http.get<Comment>('https://jsonplaceholder.typicode.com/posts/1');
  }

  }

