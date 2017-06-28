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
      let pageText = document.querySelector(".page-text");
      let url = window.location.pathname;
      const realisaties = ['/realisaties', '/realisaties/hedon-bestelproces', '/realisaties/bfo', '/realisaties/100-100-100'];
      const concepten = ['/concepten', '/concepten/voerdam', '/concepten/jij-en-overijssel', '/concepten/schone-ijsseloevers'];
        
      if(realisaties.indexOf(url) >= 0){
        pageText.innerHTML = 'realisaties';
      } else if (concepten.indexOf(url) >= 0){
        pageText.innerHTML = 'concepten';
      }

  }

  menuToggle () {
    if (this.menuStatus == 0 || this.menuStatus == 2) {
      this.menuStatus = 1;
    } else  {
      this.menuStatus = 2;
    }
  }

}
