import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {  }

  

  getall(token: string) {
    return this.http.get<Product[]>(`http://localhost:8002/products/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
