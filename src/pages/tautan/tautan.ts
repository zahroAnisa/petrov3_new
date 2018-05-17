import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

//import { InAppBrowser } from '@ionic-native/in-app-browser';


/**
 * Generated class for the TautanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tautan',
  templateUrl: 'tautan.html',
})
export class TautanPage {

  constructor(
  public navCtrl: NavController, public navParams: NavParams, 
  public alertCtrl: AlertController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TautanPage');
  }

  OpenUrl1(){
  	let confirm = this.alertCtrl.create({
      title: 'Open Link E-Procurement?',
      message: 'Are you sure want to visit E-Procurement website? if you sure, please click "Open" button.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Canceled');
          }
        },
        {
          text: 'Open',
          handler: () => {
            window.open("http://epro.petrokimia-gresik.com/site/login",'_system', 'location=yes');
          }
        }
      ]
    });
    confirm.present();
  }


  OpenUrl2(){
  	let toast = this.toastCtrl.create({
      message: 'Recruitment is does not exist',
      duration: 3000,
    });
    toast.present();
  }
  OpenUrl3(){
  	let confirm = this.alertCtrl.create({
      title: 'Open Link ITS Surabaya?',
      message: 'Are you sure want to visit ITS Surabaya website? if you sure, please click "Open" button.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Canceled');
          }
        },
        {
          text: 'Open',
          handler: () => {
            window.open("https://www.its.ac.id/",'_system', 'location=yes');
          }
        }
      ]
    });
    confirm.present();
  }
  OpenUrl4(){
  	let confirm = this.alertCtrl.create({
      title: 'Open Link Kemeneg BUMN?',
      message: 'Are you sure want to visit Kemeneg BUMN website? if you sure, please click "Open" button.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Canceled');
          }
        },
        {
          text: 'Open',
          handler: () => {
            window.open("http://www.bumn.go.id/",'_system', 'location=yes');
          }
        }
      ]
    });
    confirm.present();
  }
  OpenUrl5(){
  	let confirm = this.alertCtrl.create({
      title: 'Open Link Pupuk Indonesia?',
      message: 'Are you sure want to visit Pupuk Indonesia website? if you sure, please click "Open" button.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Canceled');
          }
        },
        {
          text: 'Open',
          handler: () => {
            window.open("http://pupuk-indonesia.com/",'_system', 'location=yes');
          }
        }
      ]
    });
    confirm.present();
  }
  OpenUrl6(){
  	let confirm = this.alertCtrl.create({
      title: 'Open Link APPI?',
      message: 'Are you sure want to visit APPI website? if you sure, please click "Open" button.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Canceled');
          }
        },
        {
          text: 'Open',
          handler: () => {
            window.open("http://www.appi.or.id/",'_system', 'location=yes');
          }
        }
      ]
    });
    confirm.present();
  }
  OpenUrl7(){
  	let confirm = this.alertCtrl.create({
      title: 'Open Link KEMENTAN?',
      message: 'Are you sure want to visit KEMENTAN website? if you sure, please click "Open" button.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Canceled');
          }
        },
        {
          text: 'Open',
          handler: () => {
            window.open("http://www.pertanian.go.id/",'_system', 'location=yes');
          }
        }
      ]
    });
    confirm.present();
  }
  OpenUrl8(){
  	let confirm = this.alertCtrl.create({
      title: 'Open Link Kabupaten Gresik?',
      message: 'Are you sure want to visit Kabupaten Gresik website? if you sure, please click "Open" button.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Canceled');
          }
        },
        {
          text: 'Open',
          handler: () => {
            window.open("http://www.gresik.go.id/",'_system', 'location=yes');
          }
        }
      ]
    });
    confirm.present();
  }
  OpenUrl9(){
  	let confirm = this.alertCtrl.create({
      title: 'Open Link Majalah GEMA?',
      message: 'Are you sure want to visit Majalah GEMA website? if you sure, please click "Open" button.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Canceled');
          }
        },
        {
          text: 'Open',
          handler: () => {
            window.open("http://www.petrokimia-gresik.com/Gema/nologin/",'_system', 'location=yes');
          }
        }
      ]
    });
    confirm.present();
  }
  OpenUrl10(){
  	let confirm = this.alertCtrl.create({
      title: 'Open Link Tabloid Sahabat Petani?',
      message: 'Are you sure want to visit Tabloid Sahabat Petani website? if you sure, please click "Open" button.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Canceled');
          }
        },
        {
          text: 'Open',
          handler: () => {
            window.open("http://tabloidsahabatpetani.com/",'_system', 'location=yes');
          }
        }
      ]
    });
    confirm.present();
  }
  OpenUrl11(){
  	let confirm = this.alertCtrl.create({
      title: 'Open Link RSPG?',
      message: 'Are you sure want to visit RSPG website? if you sure, please click "Open" button.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Canceled');
          }
        },
        {
          text: 'Open',
          handler: () => {
            window.open("http://www.rspetrokimiagresik.com/",'_system', 'location=yes');
          }
        }
      ]
    });
    confirm.present();
  }
  OpenUrl12(){
  	let confirm = this.alertCtrl.create({
      title: 'Open Link Web Mail?',
      message: 'Are you sure want to visit Web Mail website? if you sure, please click "Open" button.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Canceled');
          }
        },
        {
          text: 'Open',
          handler: () => {
            window.open("https://webmail.petrokimia-gresik.com/",'_system', 'location=yes');
          }
        }
      ]
    });
    confirm.present();
  }
  OpenUrl13(){
  	let confirm = this.alertCtrl.create({
      title: 'Open Link HIMPEN?',
      message: 'Are you sure want to visit HIMPEN website? if you sure, please click "Open" button.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Canceled');
          }
        },
        {
          text: 'Open',
          handler: () => {
            window.open("http://www.petrokimia-gresik.com/himpen/menu_himpen.htm",'_system', 'location=yes');
          }
        }
      ]
    });
    confirm.present();
  }
  OpenUrl14(){
  	let confirm = this.alertCtrl.create({
      title: 'Open Link LAPOR?',
      message: 'Are you sure want to visit LAPOR website? if you sure, please click "Open" button.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Canceled');
          }
        },
        {
          text: 'Open',
          handler: () => {
            window.open("https://www.lapor.go.id/",'_system', 'location=yes');
          }
        }
      ]
    });
    confirm.present();
  }


}


