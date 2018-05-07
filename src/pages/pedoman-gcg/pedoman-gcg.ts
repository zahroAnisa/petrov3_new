import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PedomanGcgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedoman-gcg',
  templateUrl: 'pedoman-gcg.html',
})
export class PedomanGcgPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedomanGcgPage');
  }

  downloadAndOpenPdf(){
    window.open("http://www.petrokimia-gresik.com/Resources/Docs/PEDOMAN%20GCG%202016.pdf",'_system', 'location=yes');
  }

}
