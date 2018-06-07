import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KimiaPage } from './kimia';

@NgModule({
  declarations: [
    KimiaPage,
  ],
  imports: [
    IonicPageModule.forChild(KimiaPage),
  ],
})
export class KimiaPageModule {}
