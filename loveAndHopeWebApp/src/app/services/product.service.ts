import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  URL_API = 'http://localhost:3000/products/';

  constructor(private http:HttpClient){}



  getProducts(){
    return this.http.get<Product[]>(this.URL_API);
  }
}
