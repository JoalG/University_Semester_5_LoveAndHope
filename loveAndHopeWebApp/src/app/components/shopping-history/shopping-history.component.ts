import { Component, OnInit } from '@angular/core';
import jwtDecode, { JwtPayload } from "jwt-decode";
import { FormService } from 'src/app/services/form.service';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-shopping-history',
  templateUrl: './shopping-history.component.html',
  styleUrls: ['./shopping-history.component.css']
})
export class ShoppingHistoryComponent implements OnInit {

  items:any[] = [];


  userInfo = {
    name: "",
    e_mail: "",
    phone_number: ""
  }

  constructor(private formService: FormService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.setCurrentUserInfo();
    this.getItems();
  }

  setCurrentUserInfo(){
    const token:any = localStorage.getItem('token');
    if(token !== null){
      const decoded:any = jwtDecode<JwtPayload>(token); // Returns with the JwtPayload typ
      this.userInfo.name = decoded.name;
      this.userInfo.e_mail = decoded.e_mail;
      this.userInfo.phone_number = decoded.phone_number
    }
  }


  getItems(){
    this.orderService.getOrdersByUser(this.getCurrentUsername()).subscribe(
      
      res => {
        let orders:any[] = res;


        orders.forEach(order => {
          this.formService.getForm(order.formId).subscribe(
            res => {
              this.items.push({order:order,form:res});
            },
              err => console.log(err)
          );
        });

      },
      err => console.log(err)
    );
  }

  getCurrentUsername():String{
    const token:any = localStorage.getItem('token');
    if(token !== null){
      const decoded:any = jwtDecode<JwtPayload>(token); // Returns with the JwtPayload typ
      return decoded.username;
    }
    else{
      return "user_x";
    }
  }

  getID(id:String){
    let res = id.match(/\d/g);
    let res2 = res?.join("");
    return res2;
  }

}
