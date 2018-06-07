import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KclPage } from './kcl';

@NgModule({
  declarations: [
    KclPage,
  ],
  imports: [
    IonicPageModule.forChild(KclPage),
  ],
})
export class KclPageModule {}
