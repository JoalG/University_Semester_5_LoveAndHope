import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tray } from '../models/tray.model';

@Injectable({
  providedIn: 'root'
})
export class TrayService {

  URL_API = 'http://localhost:3000/trays/';

  constructor(private http:HttpClient){}



  getTrays(){
    return this.http.get<Tray[]>(this.URL_API);
  }


}
