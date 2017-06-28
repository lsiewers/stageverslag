import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  providers: [AppService]
})
export class IntroComponent implements OnInit {
  data: any;

  globalData: Array<any> = [];

  constructor(private route: ActivatedRoute, private appService: AppService) { }

  ngOnInit() {
    this.route.params.subscribe((a: any) => {

      this.appService.getData(a.link).subscribe(b => {
        this.data = b.find(c => c.link === a.link);
      });
    });

    this.appService.getGlobalData().subscribe(a => {
      this.globalData = a;
    })
  }

}
