import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JasaPage } from './jasa';

@NgModule({
  declarations: [
    JasaPage,
  ],
  imports: [
    IonicPageModule.forChild(JasaPage),
  ],
})
export class JasaPageModule {}
