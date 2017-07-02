import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  menuStatus = 0;

  constructor(private router: Router) {

    // page title
    router.events.subscribe((val) => {
      const pageText = document.querySelector('.page-text');
      const url = this.router.url;
      const realisaties = ['/realisaties', '/realisaties/hedon-bestelproces', '/realisaties/bfo', '/realisaties/100-100-100'];
      const concepten = ['/concepten', '/concepten/voerdam', '/concepten/jij-en-overijssel', '/concepten/schone-ijsseloevers'];
      if (url === '/' || url === '/intro') {
        pageText.innerHTML = 'Intro';
      } else if (realisaties.indexOf(url) >= 0) {
        pageText.innerHTML = 'Realisaties';
      } else if (concepten.indexOf(url) >= 0) {
        pageText.innerHTML = 'Concepten';
      } else {
        pageText.innerHTML = (url.slice(1).charAt(0).toUpperCase() + url.slice(2));
      }
    });
  }

  ngOnInit() {
  }

  menuToggle () {
    if (this.menuStatus === 0 || this.menuStatus === 2) {
      this.menuStatus = 1;
    } else  {
      this.menuStatus = 2;
    }
  };

}
