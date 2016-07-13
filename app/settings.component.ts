import {Component, OnInit} from '@angular/core';

import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import * as _ from 'lodash';

import { CheckboxComponent } from './checkbox.component';

@Component({
  selector: 'sb-settings',
  templateUrl: 'app/settings.component.html',
  styleUrls: ['app/settings.component.css'],
  directives: [CheckboxComponent]
})
export class SettingsComponent implements OnInit {

  constructor(private http: Http) {}
  
  //TODO: transpilation error if removed, but seems unnecessary?
  settings;

  ngOnInit(){
     this.http.get('app/mock-data/settings.json')
      .toPromise()
      .then(response => {
        this.settings = response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: any){
    console.log('Sorry, an error occurred', error);
    return Promise.reject(error.message || error)
  }

}