import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PedomanAuditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedoman-audit',
  templateUrl: 'pedoman-audit.html',
})
export class PedomanAuditPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedomanAuditPage');
  }

  downloadAndOpenPdf(){
    window.open("http://www.petrokimia-gresik.com/Resources/Docs/Committee%20Audit%20Charter.pdf",'_system', 'location=yes');
  }

}
