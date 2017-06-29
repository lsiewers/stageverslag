import { Component, OnInit, Input } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [AppService]
})
export class FooterComponent implements OnInit {
  @Input() nextLink: any;
  projects: Array<any> = [];
  project: any;

  constructor(private route: ActivatedRoute, private appService: AppService) { }

  ngOnInit() {
  }

}
