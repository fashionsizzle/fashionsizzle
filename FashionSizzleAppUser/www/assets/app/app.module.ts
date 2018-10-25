import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Singale } from "../pages/singale/singale";
import { CommentPage } from "../pages/comment/comment";
import { FashionsizzlertvPage } from "../pages/fashionsizzlertv/fashionsizzlertv";
import { ShopPage } from '../pages/shop/shop';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Singale,
    CommentPage,
    FashionsizzlertvPage,
    ShopPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    Singale,
        CommentPage,
          FashionsizzlertvPage,
          ShopPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
     {provide : Window , useValue: window}
  ]
})
export class AppModule {}
