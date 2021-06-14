import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) { }

  signInForm!: FormGroup;

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get username() {
    return this.signInForm.get('username');
  }

  get password(){
    return this.signInForm.get('password');
  }

  signIn() {

    this.userService.signInUser(this.signInForm.value).subscribe(
      (res:any) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/user']);
      },
      err => console.log(err) 
    );
  }
}
