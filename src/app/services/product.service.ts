import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductResponse } from '../inteface/product-response';
import { Comment } from '../inteface/post/comment';
import { environment } from 'src/environments/environment.development';
 
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl_1 = environment.apiUrl_1;
  private apiUrl_2 = environment.apiUrl_2;

  constructor(private http: HttpClient) { 

  }

  getProducts(): Observable<ProductResponse[]>{
    return this.http.get<ProductResponse[]>(`${this.apiUrl_1}/api/products`);
  }

  getComment(): Observable<Comment[]>{
    return this.http.get<Comment[]>(`${this.apiUrl_2}/posts`);
  }

  createComment(comment: Comment):Observable<Comment>{
    return this.http.post<Comment>(`${this.apiUrl_2}/posts`,comment);
  } 

  }

