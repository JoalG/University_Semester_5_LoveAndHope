import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tray-cards-carousel',
  templateUrl: './tray-cards-carousel.component.html',
  styleUrls: ['./tray-cards-carousel.component.css']
})
export class TrayCardsCarouselComponent implements OnInit {

  //Debe ser input
  trays = [
    {
      "img_url" : "soy el link de imagen",
      "tray_url" : "soy el url de tray"
    },
    {
      "img_url" : "soy el link de imagen",
      "tray_url" : "soy el url de tray"
    },
    {
      "img_url" : "soy el link de imagen",
      "tray_url" : "soy el url de tray"
    },
    {
      "img_url" : "soy el link de imagen",
      "tray_url" : "soy el url de tray"
    },
    {
      "img_url" : "soy el link de imagen",
      "tray_url" : "soy el url de tray"
    },
    {
      "img_url" : "soy el link de imagen",
      "tray_url" : "soy el url de tray"
    }
  ];


  tray_example = {
    "img_url" : "soy el link de imagen",
    "tray_url" : "soy el url de tray"
  }

  
  constructor() {


  }

  ngOnInit(): void {
  }

  getGroups(arr:any, numGroups:number) {
    const perGroup = numGroups;
    return new Array(Math.ceil(arr.length / numGroups))
      .fill('')
      .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
  }
  




}
