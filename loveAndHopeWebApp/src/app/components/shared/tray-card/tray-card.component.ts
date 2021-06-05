import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tray-card',
  templateUrl: './tray-card.component.html',
  styleUrls: ['./tray-card.component.css']
})
export class TrayCardComponent implements OnInit {

  @Input() tray : any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
