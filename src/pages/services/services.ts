import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {
services:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.services=[{img:"assets/img/ic1.png",title:"General Plumbing Work"},{img:"assets/img/ic2.png",title:"Toilet Fittings"},{img:"assets/img/ic3.png",title:"Taps & Faucets Repair"},{img:"assets/img/ic4.png",title:"Sink and Basin Repair"},{img:"assets/img/ic5.png",title:"Leakage Repair "},{img:"assets/img/ic6.png",title:"Bathroom Installation"},{img:"assets/img/ic2.png",title:"Toilet Fittings"},{img:"assets/img/ic3.png",title:"Taps & Faucets Repair"}]
  }

}
