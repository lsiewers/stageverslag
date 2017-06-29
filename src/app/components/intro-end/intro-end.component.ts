import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-intro-end',
  templateUrl: './intro-end.component.html',
  styleUrls: ['./intro-end.component.scss']
})
export class IntroEndComponent implements OnInit {
  contentType: string;

  constructor(private route: ActivatedRoute) { };

  ngOnInit() {
    this.route.data.subscribe((a: any) => {
      this.contentType = a.type;
    });
  }
}
