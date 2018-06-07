import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BiofeedPage } from './biofeed';

@NgModule({
  declarations: [
    BiofeedPage,
  ],
  imports: [
    IonicPageModule.forChild(BiofeedPage),
  ],
})
export class BiofeedPageModule {}
