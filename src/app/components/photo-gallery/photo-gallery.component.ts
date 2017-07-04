import { Component, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
  providers: [AppService]
})
export class PhotoGalleryComponent implements AfterViewInit {
  private data: any;
  imgLoaded: boolean = false;
  private lightBox: boolean = false;
  private projects: any;
  private projectImg: any;
  private imgSrc: any;

  constructor(private route: ActivatedRoute, private router: Router, private appService: AppService) {
  };

  ngAfterViewInit() {
      this.imgLoaded = true;
  };

  lightBoxOpen(event) {
    const imgSrc = event.target.src;
    this.lightBox = true;
    document.querySelector('.lightbox-img').setAttribute('src', imgSrc);
    document.body.style.overflow = 'hidden';
  };

  lightBoxClose() {
    this.lightBox = false;
    document.body.style.overflow = 'auto';
  }
};

