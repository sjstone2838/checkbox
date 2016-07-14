import * as _ from 'lodash';

export class Utils {

  proper(s: string){
    let properArray: string[] = [];

    _.forEach(s.match(/([a-z0-9!\.])+/gi), function(w){
       properArray.push(w[0].toUpperCase() + w.slice(1))
    });
    return properArray.join(' ');
  }

}