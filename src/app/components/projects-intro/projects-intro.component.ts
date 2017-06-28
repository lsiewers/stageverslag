import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-projects-intro',
  templateUrl: './projects-intro.component.html',
  styleUrls: ['./projects-intro.component.scss'],
  providers: [AppService]
})
export class ProjectsIntroComponent implements OnInit {
  projects: Array<any> = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getGlobalData().subscribe(a => {
      this.projects = a;
    })
  }

}

