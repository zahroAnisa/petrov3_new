import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the PengumumanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pengumuman',
  templateUrl: 'pengumuman.html',
})
export class PengumumanPage {
	cards1: any;
  constructor(public navCtrl: NavController) {
  	//NEWS CARDS
	this.cards1 = new Array(5);//untuk jumlah card yang akan ditampilkan
  }

}
