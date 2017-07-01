import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { AppService } from '../../services/app.service';
import { HostListener} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})


export class ProjectComponent implements OnInit {
  data: any;
  nextLink: any;
  headerImg: any;

  projectScroll: boolean = false;

  constructor(private route: ActivatedRoute, private appService: AppService) { }

  ngOnInit() {
    this.route.params.subscribe((a: any) => {

      this.appService.getData(a.link).subscribe(b => {
        this.data = b.find(c => c.link === a.link);
        this.nextLink = {
          url: this.data.nextLink,
          name: this.data.nextName
        };
        this.headerImg = {
          url: this.data.headerImg
        };
      });

      // standard settings
      document.body.scrollTop = 0;
      this.projectScroll = false;
    });
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.projectScroll = true;

    if (document.body.scrollTop > 0 && !(document.querySelector('.project-header').classList.contains('scrollTrue'))) {
         document.body.style.overflow = 'hidden';
    };

    if (document.body.style.overflow === 'hidden') {
      setTimeout(function() {
        document.body.style.overflow = 'auto';
      }, 1600);
    };
  }
}
