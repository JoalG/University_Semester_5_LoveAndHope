import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import jwtDecode, { JwtPayload } from "jwt-decode";
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {



  constructor(private userService: UserService, private fb: FormBuilder, private router: Router) { }

  signUpForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
    name: ['', [Validators.required]],
    e_mail: ['', [Validators.required, Validators.email]],
    phone_number: ['', [Validators.required]]
  })


  ngOnInit(): void {

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


  postUser(){

    let user: User = {
      username: this.signUpForm.value.username,
      password :this.signUpForm.value.password,
      name: this.signUpForm.value.name,
      e_mail: this.signUpForm.value.e_mail,
      phone_number: this.signUpForm.value.phone_number
    };

    console.log(user);

    this.userService.postUser(user).subscribe(
      (res:any) => {
        localStorage.setItem('token', res.token);
      },
      err => console.log(err) 
    );

  }


}
