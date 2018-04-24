import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  slideData = [{ image: "../assets/imgs/sni17_con.jpg" },{ image: "../assets/imgs/proper 17_con.jpg"}]
  slideLength: boolean = false;

  constructor(public navCtrl: NavController) {
  	if(this.slideData.length>0) {
      this.slideLength = true;
	}
  }

}
