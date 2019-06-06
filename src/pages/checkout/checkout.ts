import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
type=1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  payMethod(index){
      this.type=index;
  }

}
