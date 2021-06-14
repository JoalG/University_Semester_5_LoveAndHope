import { Component, OnInit } from '@angular/core';
import jwtDecode, { JwtPayload } from "jwt-decode";


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


  userInfo = {
    name: "",
    e_mail: "",
    phone_number: ""
  }

  constructor() { }

  ngOnInit(): void {
    this.setCurrentUserInfo();
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


}
