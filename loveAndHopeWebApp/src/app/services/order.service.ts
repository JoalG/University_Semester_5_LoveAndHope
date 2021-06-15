import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  URL_API = 'http://localhost:3000/orders/';

  constructor(private http:HttpClient, private router: Router) { }

  postOrder(user:Order){
    return this.http.post(this.URL_API,user);
  }

  getOrders(){
    return this.http.get<Order[]>(this.URL_API);
  }

  getOrdersByUser(username:String){
    return this.http.get<Order[]>(this.URL_API+username);
  }

}
