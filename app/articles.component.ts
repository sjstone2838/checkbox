import {Component, OnInit} from '@angular/core';

import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import * as _ from 'lodash';

import { CheckboxComponent } from './checkbox.component';

@Component({
  selector: 'sb-articles',
  templateUrl: 'app/articles.component.html',
  styleUrls: ['app/articles.component.css'],
  directives: [CheckboxComponent]
})
export class ArticlesComponent implements OnInit {

  constructor(private http: Http) {}
  
  totalRead: number = 0;

  //TODO: transpilation error if removed, but seems unnecessary?
  articles

  ngOnInit(){
     this.http.get('http://api.solvebio.com/v1/articles')
      .toPromise()
      .then(response => {
        this.articles = response.json().data;
        this.makeCheckboxReady(this.articles);
      })
      .catch(this.handleError);
  }

  // TODO: redundant vs. settings.component.ts
  private handleError(error: any){
    console.log('Sorry, an error occurred', error);
    return Promise.reject(error.message || error)
  }

  // append 'isActive' property if it doesn't already exist
  makeCheckboxReady(data){
    _.forEach(data, function(item){
      if(!item.isActive){
        item.isActive = false;
      }
    });
  }

  manageTotalRead(article){
    this.totalRead += article.isActive ? 1 : -1;
  }

}