import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  items = {
    order_number:123342,
    for:"El pepe",
    budget: 250000,
    date: "15/12/2021"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
