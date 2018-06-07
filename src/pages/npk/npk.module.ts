import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NpkPage } from './npk';

@NgModule({
  declarations: [
    NpkPage,
  ],
  imports: [
    IonicPageModule.forChild(NpkPage),
  ],
})
export class NpkPageModule {}
