import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { Form } from 'src/app/models/form.model';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';
import { ToastrService } from "ngx-toastr";
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {

  items:any[] = [];
  totalPrice:number = 0;

  constructor(private formService: FormService,private orderService: OrderService, private toastr:ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.getItems();
  }


  getItems(){
    this.items = JSON.parse(localStorage.getItem("shoppingCart")!);
    this.totalPrice = this.items.reduce((total,value)=>total+value.order.price,0);

  }

  deleteItem(id:number){
    let shoppingCart:any[] = JSON.parse(localStorage.getItem("shoppingCart")!);
    shoppingCart = shoppingCart.slice(0,id).concat(shoppingCart.slice(id+1));
    
    localStorage.setItem("shoppingCart",JSON.stringify(shoppingCart));
    this.toastr.info("Canasta eliminada del carrito");
    this.getItems();
  }

  placeOrder(){
    if(this.items.length != 0){
      this.items.forEach(
        item => {
          let form:Form = item.form;
          this.formService.postForm(form).subscribe(
            (res:any) => {
              console.log(res);
              let order:Order = item.order;
              order.formId =res._id;
              console.log(order);
  
              this.orderService.postOrder(order).subscribe(
                (res:any) => {
                  console.log(res);
                  localStorage.setItem("shoppingCart",JSON.stringify([]));
                  this.getItems();
                  this.router.navigate(['/user']);
                },
                err => this.toastr.error("Ha ocurrido un eror")
              );
            },
            err => this.toastr.error("Ha ocurrido un eror")
          );
        }
      );
      this.toastr.success("Compra finalizada", "Muchas gracias");
    }else{
      this.toastr.info("No se puede realizar la compra", "El carrito se encuentra vacio !!!");
    }
  }





}
