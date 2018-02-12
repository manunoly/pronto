import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
// import { IonRating } from '../components/ion-rating/ion-rating';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ApiProvider } from '../providers/api/api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    // IonRating,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{
      scrollPadding: false,
      scrollAssist: true

    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // IonRating,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
