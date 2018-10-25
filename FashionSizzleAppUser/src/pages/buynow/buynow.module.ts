import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuynowPage } from './buynow';

@NgModule({
  declarations: [
    BuynowPage,
  ],
  imports: [
    IonicPageModule.forChild(BuynowPage),
  ],
  exports: [
    BuynowPage
  ]
})
export class BuynowPageModule {}
