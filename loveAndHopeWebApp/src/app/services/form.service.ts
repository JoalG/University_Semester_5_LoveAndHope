import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from '../models/form.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  URL_API = 'http://localhost:3000/forms/';

  constructor(private http:HttpClient, private router: Router) { }

  postForm(user:Form){
    return this.http.post(this.URL_API,user);
  }

  getForm(id:String){
    return this.http.get(this.URL_API+id);
  }


}
