import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [ProjectService]
})
export class FooterComponent implements OnInit {
  projects: Array<any> = [];
  project: any;

  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.subscribe((a: any) => {

      this.projectService.getProject(a.link).subscribe(b => {
        this.project = b.find(c => c.link === a.link);
      });
    });
  }

}
