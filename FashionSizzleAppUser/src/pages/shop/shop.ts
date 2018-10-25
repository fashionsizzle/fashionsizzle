import { Component } from '@angular/core';
import { IonicPage, NavController,LoadingController } from 'ionic-angular';
import {Api} from'../../providers/api';
// import {SinglePage} from '../single/single';
import * as moment from 'moment';




@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
  providers: [Api]
})
export class ShopPage {
  datas: any;
  data = [];
 loading: any;
 page: any;
 baseUrl = "";
 infiniteScroll: any;
  constructor(public navCtrl: NavController, public api: Api, public loadingCtrl: LoadingController) {
    this.page = 1;

    //  ionViewDidLoad() {
    //   console.log('ionViewDidLoad ShopPage');

    //  }

    this.baseUrl="http://staging.memeinfotech.com/fashionshop/wp-json/wp/v2/product/?_embed&?filter[order]=DESC&filter[posts_per_page]=5&page=";
    let now = moment().format('LLLL');
    console.log(now)
    this.getPostData(this.baseUrl + this.page);

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
    this.presentLoadingDefault();
    this.api.index(url).subscribe(data => {
      this.loading.dismiss();




      if (data.length > 0)
        {


         if (this.infiniteScroll != undefined) {

           this.infiniteScroll.complete();

           this.datas = this.datas.concat(data);
         }
         else {
           this.datas = data;

         }
       }
       else {
         if (this.infiniteScroll != undefined) {
           this.infiniteScroll.enable(false);
         }
       }

    });
  }
  openSinglePage(url) {
    this.navCtrl.push('SinglePage', {
      url: url


    })



}
}
