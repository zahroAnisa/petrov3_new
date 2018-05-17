import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PupukPage } from './pupuk';

@NgModule({
  declarations: [
    PupukPage,
  ],
  imports: [
    IonicPageModule.forChild(PupukPage),
  ],
  exports: [
  	PupukPage
  ]
})
export class PupukPageModule {}
