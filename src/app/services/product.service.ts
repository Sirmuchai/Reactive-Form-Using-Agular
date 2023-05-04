import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductResponse } from '../inteface/product-response';
 
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { 

  }

  getProducts(): Observable<ProductResponse[]>{
    return this.http.get<ProductResponse[]>('http://localhost:1337/api/products');
  }

  }

