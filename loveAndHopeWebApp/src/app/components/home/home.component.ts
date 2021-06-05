import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tray_example = {
    "img_url" : "soy el link de imagen",
    "tray_url" : "soy el url de tray"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
