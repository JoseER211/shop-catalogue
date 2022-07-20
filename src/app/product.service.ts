import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 private baseURL = "http://localhost:3000/products";
constructor(private httpClient: HttpClient) { }

  getProducts(){
    return this.httpClient.get<Product[]>(this.baseURL);
  }
}
