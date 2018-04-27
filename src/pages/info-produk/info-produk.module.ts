import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoProdukPage } from './info-produk';

@NgModule({
  declarations: [
    InfoProdukPage,
  ],
  imports: [
    IonicPageModule.forChild(InfoProdukPage),
  ],
})
export class InfoProdukPageModule {}