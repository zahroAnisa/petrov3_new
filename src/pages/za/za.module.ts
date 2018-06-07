import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZaPage } from './za';

@NgModule({
  declarations: [
    ZaPage,
  ],
  imports: [
    IonicPageModule.forChild(ZaPage),
  ],
})
export class ZaPageModule {}
