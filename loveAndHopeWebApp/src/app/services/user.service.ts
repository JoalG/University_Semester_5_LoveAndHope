import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  URL_API = 'http://localhost:5000/users/';

  constructor(private http:HttpClient){}



  getUsers(){
    return this.http.get<User[]>(this.URL_API);
  }

  postUser(user:User){
    return this.http.post(this.URL_API,user)
  }

}
