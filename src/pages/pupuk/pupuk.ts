import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PupukPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pupuk',
  templateUrl: 'pupuk.html',
})
export class PupukPage {
 mySelectedIndex: number;

  constructor( public navCtrl: NavController, public navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PupukPage');
  }

}
