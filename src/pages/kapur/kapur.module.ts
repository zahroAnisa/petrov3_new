import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KapurPage } from './kapur';

@NgModule({
  declarations: [
    KapurPage,
  ],
  imports: [
    IonicPageModule.forChild(KapurPage),
  ],
})
export class KapurPageModule {}
