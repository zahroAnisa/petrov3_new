import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the InfoProdukPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-produk',
  templateUrl: 'info-produk.html',
})
export class InfoProdukPage {

  cards1: any;
  cards2: any;
  slideData = [{ image: "../assets/imgs/sni17_con.jpg" },{ image: "../assets/imgs/proper 17_con.jpg"}]
  slideLength: boolean = false;

  constructor(public navCtrl: NavController) {
  	if(this.slideData.length>0) {
      this.slideLength = true;
	}
	//NEWS CARDS
	this.cards1 = new Array(1);//untuk jumlah card yang akan ditampilkan
	this.cards2 = new Array(1);
  }


}