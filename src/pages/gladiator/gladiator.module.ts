import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GladiatorPage } from './gladiator';

@NgModule({
  declarations: [
    GladiatorPage,
  ],
  imports: [
    IonicPageModule.forChild(GladiatorPage),
  ],
})
export class GladiatorPageModule {}
