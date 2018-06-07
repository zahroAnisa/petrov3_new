import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CornPage } from './corn';

@NgModule({
  declarations: [
    CornPage,
  ],
  imports: [
    IonicPageModule.forChild(CornPage),
  ],
})
export class CornPageModule {}
