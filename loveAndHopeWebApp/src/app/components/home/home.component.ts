import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private userService: UserService, 
    private router: Router, 
    private fb: FormBuilder, 
    private toastr: ToastrService) { }

  signInForm!: FormGroup;

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    })
    
    console.log(this.signInForm);
    console.log(this.username)
 }

  get username() {
    return this.signInForm.get('username');
  }

  get password(){
    return this.signInForm.get('password');
  }

  signIn() {

    if(this.signInForm.valid){
      this.userService.signInUser(this.signInForm.value).subscribe(
        (res:any) => {
          localStorage.setItem('token', res.token);
          localStorage.setItem("shoppingCart",JSON.stringify([])); // clean shopping cart
          this.toastr.success("Bienvenido","Sesión iniciada con éxito")
        },
        err => {
          console.log(err)
          this.toastr.error("Datos Incorrectos","No se pudo inciar sesión")
        } 
      );
    }
    else{
      Object.values(this.signInForm.controls).forEach(control =>{
        control.markAsTouched();
      })
    }

  }

  isFieldValid(field: string) {
    if(this.signInForm.get(field) != null){
      return !this.signInForm.get(field)!.valid && this.signInForm.get(field)!.touched;
    }
    return false;
  }

  isInSession() {
    return this.userService.getToken() !== null;
  }

  getCurrentUserName(){
    const token:any = localStorage.getItem('token');
    if(token !== null){
      const decoded:any = jwtDecode<JwtPayload>(token); // Returns with the JwtPayload typ
      return decoded.name;
    }
    return "";
  }

}
