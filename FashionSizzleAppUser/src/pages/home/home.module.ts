import { NgModule } from "@angular/core";
import { HomePage } from "./home";
import { IonicPageModule } from "ionic-angular/module";
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [HomePage],
  imports: [
    IonicImageLoader,
    IonicPageModule.forChild(HomePage)]
})
export class HomeModule {}
