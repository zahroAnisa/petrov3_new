import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PetroganikPage } from './petroganik';

@NgModule({
  declarations: [
    PetroganikPage,
  ],
  imports: [
    IonicPageModule.forChild(PetroganikPage),
  ],
})
export class PetroganikPageModule {}
