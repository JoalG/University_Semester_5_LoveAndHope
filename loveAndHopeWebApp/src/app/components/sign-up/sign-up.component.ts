import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  user: User = {username:"JoquinYD",password :"1234",name:"Joaquin",e_mail:"Joaquin Jimenez",phone_number:"87356256"};

  constructor(private userService: UserService, private fb: FormBuilder) { }

  signUpForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
    name: ['', [Validators.required]],
    email: ['', [Validators.required], Validators.email],
    phone_number: ['', [Validators.required]]
  })


  ngOnInit(): void {
    this.postUser()
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      res => {
        this.user = res[0];
        console.log(this.user)
      },
      err => console.log(err)
      );
  }


  postUser(){
    this.userService.postUser(this.user).subscribe(
      res => console.log(res),
      err => console.log(err)
    );


  }


}
