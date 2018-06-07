import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChiliPage } from './chili';

@NgModule({
  declarations: [
    ChiliPage,
  ],
  imports: [
    IonicPageModule.forChild(ChiliPage),
  ],
})
export class ChiliPageModule {}
