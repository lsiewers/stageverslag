import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects-intro',
  templateUrl: './projects-intro.component.html',
  styleUrls: ['./projects-intro.component.scss'],
  providers: [ProjectService]
})
export class ProjectsIntroComponent implements OnInit {
  projects: Array<any> = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(a => {
      this.projects = a;
    })
  }

}

