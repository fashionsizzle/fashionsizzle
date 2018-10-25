import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";




@Injectable()
export class Api {
  loading: any;
  constructor(public http: Http) {
    // console.log('Hello Api Provider');
  }

  index(id)
  {

    console.log(id);
    //return this.http.get('http://localhost/ionWordpress/wp-json/wp/v2/posts/?_embed&?filter[order]=DESC&filter[posts_per_page]=5&page='+id)
    //return this.http.get('http://codemaker.esy.es/wp-json/wp/v2/posts/?_embed&?filter[order]=DESC&filter[posts_per_page]=5&page='+id)
    //return this.http.get('http://staging.memeinfotech.com/fashionsizzle/wp-json/wp/v2/posts/?_embed&?filter[order]=DESC&filter[posts_per_page]=5&page='+id)
    //return this.http.get('http://staging.memeinfotech.com/fashionsizzle/fashionsizzler/wp-json/wp/v2/posts/?_embed&?filter[order]=DESC&filter[posts_per_page]=5&page='+id)
    return this.http.get(id)
      .map(res => res.json())
      .catch((err) =>
      {
        // console.log(err);

        // Do messaging and error handling here

        return Observable.throw(err);

    })
  }
}
