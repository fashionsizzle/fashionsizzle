import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { FashionsizzlertvPage } from "../pages/fashionsizzlertv/fashionsizzlertv";
// import { HomePage } from "../pages/home/home";
// import { CommentPage } from "../pages/comment/comment";
import { AlertController } from 'ionic-angular';
// import { ShopPage } from "../pages/shop/shop";
// import { SinglePage } from "../pages/single/single";
// import { BuynowPage } from "../pages/buynow/buynow";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any =   'HomePage' ;
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  // add for side bar menu
  go_to_home(menuIndex) {
    console.log("goto home trace............" + menuIndex);
    if (menuIndex == 4) {
      this.nav.setRoot('FashionsizzlertvPage')
      //this.presentAlert();
    }
    else if (menuIndex == 5) {
     this.nav.setRoot('ShopPage')
      //  this.presentAlert();
    }
    else {
      this.nav.setRoot('HomePage', {
        url: menuIndex
      });
    }

    // this.nav.push(HomePage,
    // {
    //   url:menuIndex
    // });
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Coming soon'
    });
    alert.present();
  }


  // End
}

