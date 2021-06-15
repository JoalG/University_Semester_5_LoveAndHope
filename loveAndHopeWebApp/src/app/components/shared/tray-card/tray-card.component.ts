import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tray-card',
  templateUrl: './tray-card.component.html',
  styleUrls: ['./tray-card.component.css']
})
export class TrayCardComponent implements OnInit {

  @Input() tray : any = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToNewTray(){
    this.router.navigate(['/new-tray'], {state: {tray: this.tray}});
  }
}
