import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { PaymentsPage } from "../payments/payments";

/**
 * Generated class for the BuynowPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-buynow',
  templateUrl: 'buynow.html',
})
export class BuynowPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuynowPage');
  }


 openPaymentsPage()
  {
    this.navCtrl.push('PaymentsPage');
  }


}

