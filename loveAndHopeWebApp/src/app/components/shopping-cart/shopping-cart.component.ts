import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  items:any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getItems();
  }


  getItems(){
    this.items = JSON.parse(localStorage.getItem("shoppingCart")!);

  }

  deleteItem(id:number){
    let shoppingCart:any[] = JSON.parse(localStorage.getItem("shoppingCart")!);
    shoppingCart = shoppingCart.slice(0,id).concat(shoppingCart.slice(id+1));
    console.log(shoppingCart);
    localStorage.setItem("shoppingCart",JSON.stringify(shoppingCart));
    
    this.getItems();
  }


}
