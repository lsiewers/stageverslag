import { Component, AfterViewInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../services/app.service';
import { HostListener} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})


export class ProjectComponent implements AfterViewInit {
  private data: any;
  public nextLink: any;
  private headerImg: any;
  private imgLeft: Array<any>;
  private imgRight: Array<any>;
  private projectScroll = false;
  private img: string;
  private lightBox: boolean = false;
  private projectLink: any;

  constructor(private route: ActivatedRoute, private router: Router, private appService: AppService) {
  }

  ngAfterViewInit() {
    this.route.params.subscribe((a: any) => {
      // standard settings
      window.scrollTo(0, 0);
      document.body.style.pointerEvents = 'none';
      this.projectScroll = false;

      this.appService.getData(a.link).subscribe(b => {
        this.data = b.find(c => c.link === a.link);
        this.nextLink = {
          url: this.data.nextLink,
          name: this.data.nextName
        };
        this.headerImg = {
          url: this.data.headerImg
        };
        this.imgLeft = this.data.imgLeft;
        this.imgRight = this.data.imgRight;
        this.projectLink = this.data.projectLink;
        console.log(this.data);
      });
    });
  }

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

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    const docReady = document.readyState === 'complete';
    const hasClass = document.querySelector('.project-header').classList.contains('scrollTrue');

    if (document.body.scrollTop > 0 && !hasClass && docReady) {
      document.body.style.overflow = 'hidden';
      this.projectScroll = true;
    };

    if (document.body.style.overflow === 'hidden') {
      setTimeout(function() {
        document.body.style.overflow = 'auto';
      document.body.style.pointerEvents = 'all';
      }, 1600);
    };
  }
}
