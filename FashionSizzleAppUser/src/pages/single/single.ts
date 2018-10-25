import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {Http} from '@angular/http';
// import { BuynowPage } from "../buynow/buynow";






@IonicPage()
@Component({
  selector: 'page-single',
  templateUrl: 'single.html',
})
export class SinglePage {
  datas: any = [];
  data: any;
  loading:any;
  constructor(public navCtrl: NavController, params: NavParams, private http: Http,
    //  private modalCtrl: ModalController,
     public loadingCtrl: LoadingController) {
    console.log("trace url : ---" + params.data.url+"/?_embed");
    this.presentLoadingDefault();
    this.http.get(params.data.url+'/?_embed=' + params.data).subscribe(data=>{
      // console.log("datasssss........");
      // console.log(params.data);
      this.datas.push(data.json())
      this.loading.dismiss();
      this.data = data;
       console.log("trace url 2 : ---" + data.json()._links.replies[0].href);
      console.log("trace url : ---" + params.data.url_id+"/?_embed");
        //this.datas.push(data.json()));

    });


  // modal.present()
  }

  openBuynowPage()
  {
    this.navCtrl.push('BuynowPage');
  }


  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SinglePage');
  }
  // add_p_deatils(url_id)
  // {
  //    this.count=0;
  //    if(this.data.guid["0"].id == ) {
  //     this.count=this.count+1;
  //   }
  //   else{
  //     this.count=this.count;
  //   }




  // }

}
