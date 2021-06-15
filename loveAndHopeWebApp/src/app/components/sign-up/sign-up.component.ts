import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import jwtDecode, { JwtPayload } from "jwt-decode";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {



  constructor(
    private userService: UserService, 
    private fb: FormBuilder, 
    private router: Router,
    private toastr: ToastrService) { }

  signUpForm!: FormGroup;

  isFieldValid(field: string) {
    if(this.signUpForm.get(field) != null){
      return !this.signUpForm.get(field)!.valid && this.signUpForm.get(field)!.touched;
    }
    return false;
  }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      name: ['', [Validators.required]],
      e_mail: ['', [Validators.required, Validators.email]],
      phone_number: ['', [Validators.required]]
    })
  }

/*   getUsers(){
    this.userService.getUsers().subscribe(
      res => {
        this.user = res[0];
        console.log(this.user)
      },
      err => console.log(err)
      );
  } */

  arePasswordsNotSame(){
    return (this.signUpForm.get('password')!.value !== this.signUpForm.get('confirmPassword')!.value) && (this.signUpForm.get('password')?.touched && this.signUpForm.get('confirmPassword')?.touched);
  }

  postUser(){

    if(this.signUpForm.valid && (this.signUpForm.get('password')!.value === this.signUpForm.get('confirmPassword')!.value)){
      let user: User = {
        username: this.signUpForm.value.username,
        password :this.signUpForm.value.password,
        name: this.signUpForm.value.name,
        e_mail: this.signUpForm.value.e_mail,
        phone_number: this.signUpForm.value.phone_number
      };
  
      this.userService.postUser(user).subscribe(
        (res:any) => {
          localStorage.setItem('token', res.token);
          localStorage.setItem("shoppingCart",JSON.stringify([])); // clean shopping cart
          this.toastr.success("Bienvenido","Usuario creado con éxito")
          this.router.navigate(['/home']);
        },
        err => {
          console.log(err)
          this.toastr.error("Nombre de usuario no disponible","No se pudo crear el usuario")
        }   
      );
    }
    else{
      Object.values(this.signUpForm.controls).forEach(control =>{
        control.markAsTouched();
      })
    }


  }


}
