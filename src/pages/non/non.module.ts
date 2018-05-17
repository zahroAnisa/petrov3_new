import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NonPage } from './non';

@NgModule({
  declarations: [
    NonPage,
  ],
  imports: [
    IonicPageModule.forChild(NonPage),
  ],
  exports: [
  	NonPage
  ]
})
export class NonPageModule {}
