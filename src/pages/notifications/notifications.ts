import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {
notifications:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.notifications=[{title:"My Order ( Plumber )",note:"Last  30 Min",time:"02:30 Pm"},{title:"My Order ( Plumber )",note:"Last  30 Min",time:"02:30 Pm"}]
  }

}
