import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
items:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.items=[{img:"assets/img/002.png",title:"cleaning"},{img:"assets/img/003.png",title:"Electrical"},{img:"assets/img/004.png",title:"plumber"},{img:"assets/img/005.png",title:"carpenter"},{img:"assets/img/006.png",title:"Security "},{img:"assets/img/007.png",title:"Wallpaper"}]
  }


}
