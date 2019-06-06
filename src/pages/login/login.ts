import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public menuCtrl: MenuController) {
    this.menuCtrl.swipeEnable(false);
  }

  forgotPassword() {
    let forgotpas = this.alertCtrl.create({
      title: 'Forgot password',  
      message: "Enter your email address and we'll help you reset your password",
      inputs: [
        {
          name: 'email',
          placeholder: 'E-mail'
        },
      ],
      buttons: [
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
          }
        },
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    forgotpas.present();
  }
}