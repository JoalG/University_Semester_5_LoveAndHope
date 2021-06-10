import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-history',
  templateUrl: './shopping-history.component.html',
  styleUrls: ['./shopping-history.component.css']
})
export class ShoppingHistoryComponent implements OnInit {

  items = [{
    order_number:123342,
    for:"El pepe",
    budget: 250000,
    date: "15/12/2021"
  },{
    order_number:123342,
    for:"El pepe",
    budget: 250000,
    date: "15/12/2021"
  },{
    order_number:123342,
    for:"El pepe",
    budget: 250000,
    date: "15/12/2021"
  },{
    order_number:123342,
    for:"El pepe",
    budget: 250000,
    date: "15/12/2021"
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
