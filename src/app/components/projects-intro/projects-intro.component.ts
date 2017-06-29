import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects-intro',
  templateUrl: './projects-intro.component.html',
  styleUrls: ['./projects-intro.component.scss'],
  providers: [AppService]
})
export class ProjectsIntroComponent implements OnInit {
  projects: Array<any> = [];
  nextLink: any;
  data: any;
  notVisible = false;

  constructor(private route: ActivatedRoute, private router: Router, private appService: AppService) {

  }

  ngOnInit() {
    this.appService.getGlobalData().subscribe(a => {
      this.projects = a;
      console.log(a);
    });
    this.route.data.subscribe((a: any) => {

      const url = this.router.url;
      if (url === '/realisaties') {
        this.nextLink = {
          url: '/realisaties/hedon-bestelproces',
          name: 'Hedon bestelproces'
        };
      } else if (url === '/concepten') {
        this.nextLink = {
          url: '/concepten/voerdam',
          name: 'Voerdam'
        };
      }
    });
    
    this.router.events.subscribe((val) => {

      const url = this.router.url;

      const checkIfParent = url.split("/").pop();
      console.log(checkIfParent);

    if (checkIfParent !== 'realisaties' && checkIfParent !== 'concepten') {
        this.notVisible = true;
      }
    });
  }

}

