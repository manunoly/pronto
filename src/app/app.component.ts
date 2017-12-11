import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomeTPage } from '../pages/transportista/home-t/home-t';
import { HomeCPage } from '../pages/cliente/home-c/home-c';
import { User } from "../models/user";
@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any;
  user: User;
  constructor( platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen ) {
    this.user = new User();

    if (localStorage.getItem('prontoUser') ) {
      this.user =  JSON.parse(localStorage.getItem('prontoUser'));
      if (this.user.rol == "1")
        this.rootPage = HomeTPage;
       else
        this.rootPage = HomeCPage;
    }
    else this.rootPage = LoginPage;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

