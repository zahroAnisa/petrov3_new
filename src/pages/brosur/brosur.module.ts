import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrosurPage } from './brosur';

@NgModule({
  declarations: [
    BrosurPage,
  ],
  imports: [
    IonicPageModule.forChild(BrosurPage),
  ],
  exports: [
  	BrosurPage
  ]
})
export class BrosurPageModule {}
