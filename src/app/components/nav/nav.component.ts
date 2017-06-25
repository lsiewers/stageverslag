import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  
  menuStatus: number = 0;

  constructor() { 
  }

  ngOnInit() {
  }

  menuToggle () {
    if (this.menuStatus == 0 || this.menuStatus == 2) {
      this.menuStatus = 1;
    } else  {
      this.menuStatus = 2;
    }
  }

}
