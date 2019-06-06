import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class OffersPage {
offers:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.offers=[{img:"assets/img/001.png",title:"Cleaning offer 50%OFF"},{img:"assets/img/008.png",title:"Electrical offer 20%OFF"}]
  }   

}
