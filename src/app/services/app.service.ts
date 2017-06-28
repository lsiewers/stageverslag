import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AppService {
  
  private projects: Array<any>;

  constructor(private http: Http) {

  }

  getGlobalData() {
    return this.http.get('../../assets/data/data.json').map(a => a.json());
  }

  getData(link: Array<any>) {
    return this.http.get('../../assets/data/data.json').map(a => a.json());
  }

}
