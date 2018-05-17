import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the DosisPemupukanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dosis',
  templateUrl: 'dosis.html',
})
export class DosisPage {

 
  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DosisPage');
  }

  openActionSheet(){
 console.log('opening');
 let actionsheet = this.actionSheetCtrl.create({
 title:"Choose Another One",
 buttons:[{
 text: 'View',
 handler: () => {
 console.log("View Clicked");
 }
 },{
 text: 'Download',
 handler: function(){
 console.log("Download Clicked");
 }
 }]
 });
 actionsheet.present();
}
}


