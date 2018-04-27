import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CsrPage } from './csr';

@NgModule({
  declarations: [
    CsrPage,
  ],
  imports: [
    IonicPageModule.forChild(CsrPage),
  ],
})
export class CsrPageModule {}
