import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PedomanEtikPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedoman-etik',
  templateUrl: 'pedoman-etik.html',
})
export class PedomanEtikPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedomanEtikPage');
  }

  downloadAndOpenPdf(){
    window.open("http://www.petrokimia-gresik.com/Resources/Docs/PEBK_2017.pdf",'_system', 'location=yes');
  }

}
