import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Singale } from './singale';


@NgModule({
  declarations: [
    Singale,

  ],
  imports: [
    IonicPageModule.forChild(Singale),
  ],
  exports: [
    Singale
  ]
})
export class SingaleModule {}
