import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, IonicPage } from 'ionic-angular';
import { Api } from '../../providers/api';

import * as moment from 'moment';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Api]



})

export class HomePage {
  public dataOne:boolean;
  public nextPageToken = "";  // initial value
  posts: any;
  page: any;
  itemsdisplayed: any;
  numofposts: any;
  data = [];
  public play = true;
  datas: any;
  loading: any;
  title: string = "home";

  //Base url for get wp blog data
  baseUrl = "";
  //infindefvwufge scroluwhgdfqgw
  infiniteScroll: any;
  constructor(public navCtrl: NavController,
      public api: Api, params: NavParams, public loadingCtrl: LoadingController) {
    this.page = 1;
    console.log("Home ts || constructor");

    // api.index(1).subscribe(data =>
    // {
    //   this.datas = data.json();
    // });

    console.log(params.data.url);

    //Checking blog type i.e fashionsizzler or Fashionsizzle etc...
    if (params.data.url == 1)
    {
      this.title = "Fashion Sizzler"
      // this.baseUrl = 'http://fashionsizzler.net/wp-json/wp/v2/posts/?_embed&?filter[order]=DESC&filter[posts_per_page]=5&page=';
      this.baseUrl = 'http://mitapi.memeinfotech.com:5018/user/fashionSizzler?page=';
    }
    else if (params.data.url == 2)
    {
      this.title = "Sizzle Men"
      //this.baseUrl = 'http://staging.memeinfotech.com/fashionsizzle/sizzlemenswear/wp-json/wp/v2/posts/?_embed&?filter[order]=DESC&filter[posts_per_page]=5&page=';
      // this.baseUrl ="http://sizzlemenswear.com/wp-json/wp/v2/posts/?_embed&?filter[order]=DESC&filter[posts_per_page]=5&page=";
      this.baseUrl ='http://mitapi.memeinfotech.com:5018/user/sizzleMenswear?page=';
    }
    else if (params.data.url == 3)
    {
      this.title = "Teen Sizzle"
      // this.baseUrl = 'http://teen-sizzle.com/wp-json/wp/v2/posts/?_embed&?filter[order]=DESC&filter[posts_per_page]=5&page=';
      this.baseUrl = 'http://mitapi.memeinfotech.com:5018/user/teenSizzle?page=';
    }
    else
    {
      this.title = "Fashion Sizzle"
      // this.baseUrl = 'http://fashionsizzle.com/fashionsizzle/wp-json/wp/v2/posts/?_embed&?filter[order]=DESC&filter[posts_per_page]=5&page=';
      this.baseUrl = 'http://mitapi.memeinfotech.com:5018/user/fashionSizzle?page=';
    }

    //Get Blog based on domain type
    this.getPostData(this.baseUrl + this.page);
    console.log("trace page number" + this.page);

    let now = moment().format('LLLL');
    console.log(now);

  }
  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();
  }

  public doInfinite(infiniteScroll) {
    console.log("doInfinitetrace----")
    this.infiniteScroll = infiniteScroll;
    this.page = this.page + 1;

    // let loader = this.loadingCtrl.create({
    //   content: 'Please Wait'
    // });
    // loader.present();

    this.getPostData(this.baseUrl + this.page);
    //infiniteScroll.complete();

  }

  getPostData(url) {
  let loader = this.loadingCtrl.create({
    spinner: 'bubbles',
    content: "Please wait...",
  });
  if(this.page==1){
  loader.present();
}

    this.api.index(url).subscribe((data)=>
    {
      console.log(data);
      // if(data.better_featured_image!=undefined){
      //   this.dataOne=true;
      // }
      // else{
      //   this.dataOne=false;
      // }

      if (data.length > 0)
      {
        console.log(data.length);

        if (this.infiniteScroll != undefined)
        {

          this.infiniteScroll.complete();

          this.datas = this.datas.concat(data);
          if(this.page==1){
          loader.dismiss();
          }

        }
        else
        {
          this.datas = data;
          if(this.page==1){
          loader.dismiss();
          }

        }
      }
      else
      {
        if (this.infiniteScroll != undefined)
        {
          this.infiniteScroll.enable(false);
        }
        if(this.page==1){
        loader.dismiss();
        }
      }
    }, function (error)
    {
      console.log(error);
      if(this.page==1){
      loader.dismiss();
      }
      alert('http request not found');
    });
  }

  openSinglePage(url) {
    this.navCtrl.push('Singale', {
      url: url
    })
  }

}
