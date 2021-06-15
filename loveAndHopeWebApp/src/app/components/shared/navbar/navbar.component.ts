import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  isInSession() {
    return this.userService.getToken() !== null;
  }
  
  logOut() {
    this.userService.logout();
    localStorage.setItem("shoppingCart",JSON.stringify([])); // clean shopping cart
    this.toastr.info("Gracias","Sesión finalizada")
  }

}
