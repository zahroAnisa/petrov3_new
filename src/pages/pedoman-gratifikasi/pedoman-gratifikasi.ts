import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PedomanGratifikasiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedoman-gratifikasi',
  templateUrl: 'pedoman-gratifikasi.html',
})
export class PedomanGratifikasiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedomanGratifikasiPage');
  }

  download(){
  	window.open("http://www.petrokimia-gresik.com/Resources/Docs/Pedoman%20Pengendalian%20Gratifikasi.pdf",'_system', 'location=yes');
  }


}
