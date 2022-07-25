import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 private baseURL = "http://localhost:3000/products";
constructor(private httpClient: HttpClient) { }

  getProducts(){
    return this.httpClient.get<Product[]>(this.baseURL);
  }

  getProduct(id: number): Observable<Product>{
    return this.httpClient.get<Product>(this.baseURL + '/' + id);
  }

  addProduct(product: Product): Observable<Object>{
    return this.httpClient.post(this.baseURL, product);
  }

  updateProduct(product: Product): Observable<Object>{
    return this.httpClient.put(this.baseURL + '/' + product.id, product);
  }

  deleteProduct(id: number): Observable<Object>{
    return this.httpClient.delete(this.baseURL + '/' + id);
  }
}
