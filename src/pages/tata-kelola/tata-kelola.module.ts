import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TataKelolaPage } from './tata-kelola';

@NgModule({
  declarations: [
    TataKelolaPage,
  ],
  imports: [
    IonicPageModule.forChild(TataKelolaPage),
  ],
  exports: [
  	TataKelolaPage
  ]
})
export class TataKelolaPageModule {}
