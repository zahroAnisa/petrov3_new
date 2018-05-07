import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PedomanJasaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedoman-jasa',
  templateUrl: 'pedoman-jasa.html',
})
export class PedomanJasaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedomanJasaPage');
  }

  downloadAndOpenPdf(){
    window.open("http://www.petrokimia-gresik.com/Resources/Docs/Pedoman%20Pengadaan%20Barang%20dan%20Jasa.pdf",'_system', 'location=yes');
  }

}
