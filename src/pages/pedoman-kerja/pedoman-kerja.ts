import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PedomanKerjaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedoman-kerja',
  templateUrl: 'pedoman-kerja.html',
})
export class PedomanKerjaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedomanKerjaPage');
  }

  downloadAndOpenPdf(){
  	window.open("http://www.petrokimia-gresik.com/Resources/Docs/BPM.pdf",'_system', 'location=yes');
  }


}
