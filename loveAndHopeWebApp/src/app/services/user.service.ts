import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  URL_API = 'http://localhost:5000/users/';

  constructor(private http:HttpClient, private router: Router){}



  getUsers(){
    return this.http.get<User[]>(this.URL_API);
  }

  postUser(user:User){
    return this.http.post(this.URL_API,user)
  }

  signInUser(user:any) {
    return this.http.post(this.URL_API + '/signin', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/tasks']);
  }

  getToken() {
    return localStorage.getItem('token');
  }


}
