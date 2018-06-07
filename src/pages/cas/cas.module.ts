import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CasPage } from './cas';

@NgModule({
  declarations: [
    CasPage,
  ],
  imports: [
    IonicPageModule.forChild(CasPage),
  ],
})
export class CasPageModule {}
