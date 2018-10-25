import { Component } from '@angular/core';
import { IonicPage, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
// import { CommentPage } from '../comment/comment';




@IonicPage()
@Component({
  selector: 'page-singale',
  templateUrl: 'singale.html',
})
export class Singale {
  dataOne: boolean;

  datas: any = [];
  comments=[];
  data: any;
  loading: any;
  constructor(params: NavParams, private http: Http, private modalCtrl: ModalController, public loadingCtrl: LoadingController) {
    console.log("trace url : ---" + params.data.url + "/?_embed");
   this.presentLoadingDefault();
    this.http.get(params.data.url + "/?_embed").subscribe(data => {
      this.datas.push(data.json());
      this.loading.dismiss();
      this.data = data;
      console.log("trace url 2 : ---" + data.json()._links.replies[0].href);

      this.http.get(data.json()._links.replies[0].href).subscribe(comment =>
      {
        console.log(comment.json())
        this.comments = comment.json();

        if (this.comments != null)
        {
          this.dataOne = true;
        }
        else
        {
          this.dataOne = false;
        }
      });
    });
  }
  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();
  }

  openCommentPage() {
    console.log("url trace" + this.data.json()._links.replies[0].href);

    let modal = this.modalCtrl.create('CommentPage', {
      url: this.data.json()._links.replies[0].href
    });

    modal.present()

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Singale');

  }

}
