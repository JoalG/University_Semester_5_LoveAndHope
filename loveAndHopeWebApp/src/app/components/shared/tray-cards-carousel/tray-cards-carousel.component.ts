import { Component, Input, OnInit } from '@angular/core';
import { Tray } from 'src/app/models/tray.model';
import { TrayService } from 'src/app/services/tray.service';

@Component({
  selector: 'app-tray-cards-carousel',
  templateUrl: './tray-cards-carousel.component.html',
  styleUrls: ['./tray-cards-carousel.component.css']
})
export class TrayCardsCarouselComponent implements OnInit {

  @Input() carouselId!: string;
  trays: Tray[] = [];

  
  constructor(private trayService:TrayService) {}

  ngOnInit(): void {
    this.getTrays();
  }

  getGroups(arr:any, numGroups:number) {
    const perGroup = numGroups;
    return new Array(Math.ceil(arr.length / numGroups))
      .fill('')
      .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
  }

  getTrays(){
    this.trayService.getTrays().subscribe(
      res => this.trays=res,
      err => console.log(err)
    );
  }
  




}
