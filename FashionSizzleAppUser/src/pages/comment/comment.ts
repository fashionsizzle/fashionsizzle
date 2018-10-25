// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';

// /**
//  * Generated class for the CommentPage page.
//  *
//  * See http://ionicframework.com/docs/components/#navigation for more info
//  * on Ionic pages and navigation.
//  */
// @IonicPage()
// @Component({
//   selector: 'page-comment',
//   templateUrl: 'comment.html',
// })
// export class CommentPage {

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad CommentPage');
//   }

// }

import { Component } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import {
  IonicPage,
  NavController,
  NavParams,
  // ViewController,
  AlertController,
  LoadingController
} from "ionic-angular";
import {
  // FormGroup,
  // FormControl,
  // FormBuilder,
  // Validators
} from "@angular/forms";

@IonicPage()
@Component({
  selector: "page-comment",
  templateUrl: "comment.html"
})
export class CommentPage {
  constructor(
    private navCtrl: NavController,
    private params: NavParams,
    private loadingctrl: LoadingController,
    // private viewCtrl: ViewController,
    // public formBuilder: FormBuilder,
    private alertctrl: AlertController,
    private http: Http
  ) {}
  datas: any;
  author_email: string;

  // doComment(value, event)
  //  {
  //   console.log("value after click doComment");
  //   console.log(value);
  //   console.log("qdfqwfqwdhgqw" + this.params.data.url);

  //   // if (Response.error)
  //   // {

  //   //   console.log("error message .........." + Response.error);
  //   //   alert('error in email');
  //   // }

  //   this.http.post(this.params.data.url, value).subscribe(data => {
  //     console.log("return tarce of comment" + data.json());
  //     this.viewCtrl.dismiss();
  //     this.presentAlert();

  //   });
  // }
  doComment(value, event) {
    var headers = new Headers();
    headers.append("content-type", "application/json;charset=UTF-8");
    headers.append("Access-Control-Allow-Origin", "*");
    let options = new RequestOptions({ headers: headers });
    let loader = this.loadingctrl.create({
      spinner: "bubbles",
      content: "Please wait..."
    });
    loader.present();
    this.http
      .post(this.params.data.url, value, options)
      .map(res => res.json())
      .subscribe(
        data => {
          console.log(data);
          loader.dismiss();
          this.presentAlert();
        },
        err => {
          console.log("Error!:", err.json().message);

          loader.dismiss();
          this.presentalert(err.json().message);
        }
      );
  }

  presentAlert() {
    let alert = this.alertctrl.create({
      subTitle: "Comment uploaded !!!",
      buttons: [
        {
          text: "Ok",
          role: "ok",
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }
  presentalert(errMsg) {
    let alert = this.alertctrl.create({
      message: "Failed to upload comment: \n" + errMsg,
      buttons: [
        {
          text: "Ok",
          role: "ok"
        }
      ]
    });
    alert.present();
  }
  presentLoadingDefault() {
    let loading = this.loadingctrl.create({
      content: "Please wait..."
    });

    loading.present();
  }
  dismiss() {
    this.navCtrl.pop();
  }
}
