import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZkPage } from './zk';

@NgModule({
  declarations: [
    ZkPage,
  ],
  imports: [
    IonicPageModule.forChild(ZkPage),
  ],
})
export class ZkPageModule {}
