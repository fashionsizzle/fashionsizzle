import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FashionsizzlertvPage } from './fashionsizzlertv';

@NgModule({
  declarations: [
    FashionsizzlertvPage,
  ],
  imports: [
    IonicPageModule.forChild(FashionsizzlertvPage),
  ],
  exports: [
    FashionsizzlertvPage
  ]
})
export class FashionsizzlertvPageModule {}
