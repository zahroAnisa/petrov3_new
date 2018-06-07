import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChickPage } from './chick';

@NgModule({
  declarations: [
    ChickPage,
  ],
  imports: [
    IonicPageModule.forChild(ChickPage),
  ],
})
export class ChickPageModule {}
