import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ProjectService {
  
  private projects: Array<any>;

  constructor(private http: Http) {

  }

  getProjects() {
    return this.http.get('../../assets/data/projects.json').map(a => a.json());
  }

  getProject(link: Array<any>) {
    return this.http.get('../../assets/data/projects.json').map(a => a.json());
  }

}
