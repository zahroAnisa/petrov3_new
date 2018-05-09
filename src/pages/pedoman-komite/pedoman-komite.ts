import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PedomanKomitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedoman-komite',
  templateUrl: 'pedoman-komite.html',
})
export class PedomanKomitePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedomanKomitePage');
  }

  downloadAndOpenPdf(){
  	window.open("http://www.petrokimia-gresik.com/Resources/Docs/Committee%20Risk%20Management.pdf",'_system', 'location=yes');
  }

}
