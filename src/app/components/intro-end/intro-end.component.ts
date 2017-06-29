import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-intro-end',
  templateUrl: './intro-end.component.html',
  styleUrls: ['./intro-end.component.scss']
})
export class IntroEndComponent implements OnInit {
  contentType: string;
  nextLink: any;

  constructor(private route: ActivatedRoute, private router: Router) { };

  ngOnInit() {
    this.route.data.subscribe((a: any) => {
      this.contentType = a.type;

      const url = this.router.url;
      if(url === '/inleiding') {
        this.nextLink = {
          url: '/realisaties',
          name: 'realisaties'
        }
      } else if (url === '/conclusie') {
        this.nextLink = {
          url: '/gallerij',
          name: 'gallerij'
        }
      }
    });
  }
}
