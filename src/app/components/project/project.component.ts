import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { HostListener} from '@angular/core';
import {} from '@angular/core';

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
    });
  } 

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.projectScroll = true;

    // setTimeout(function() {
    //   document.body.style.overflow = 'auto';
    // }, 1600);
    
  }
}
