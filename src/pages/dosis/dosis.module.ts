import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DosisPage } from './dosis';

@NgModule({
  declarations: [
    DosisPage,
  ],
  imports: [
    IonicPageModule.forChild(DosisPage),
  ],
})
export class DosisPageModule {}
