import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { HostListener} from '@angular/core';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})


export class ProjectComponent implements OnInit {
  project: any;

  projectScroll: boolean = false;

  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.subscribe((a: any) => {

      this.projectService.getProject(a.link).subscribe(b => {
        this.project = b.find(c => c.link === a.link);
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

