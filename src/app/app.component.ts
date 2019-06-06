import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  itemindex=0;
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginPage';

  pages: Array<any>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'HomePage',icon:'home' },
      { title: 'my orders', component: 'MyOrdersPage', icon:'cart' },
      { title: 'Profile', component: 'ProfilePage',icon:'person' },
      { title: 'Notifications', component: 'NotificationsPage',icon:'notifications' },
      { title: 'offers', component: 'OffersPage',icon:'logo-usd' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  activeItem(index){
      this.itemindex=index;
  }
  goTo(page){
     this.nav.setRoot('LoginPage');
     setTimeout(() =>{this.itemindex=0;},1000)
  }  
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
