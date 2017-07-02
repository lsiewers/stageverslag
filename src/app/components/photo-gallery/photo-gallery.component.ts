import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {
  imgLoaded: boolean = false;

  constructor(private router: Router) {
  };

  ngOnInit() {
    const imgs = document.querySelectorAll('img');
    Array.from(imgs).forEach( (el) => {
      el.onload = () => {
        this.imgLoaded = true;
        console.log(this.imgLoaded)
      };
    });
  };
};

