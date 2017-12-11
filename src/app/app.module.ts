import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonRating } from '../components/ion-rating/ion-rating';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ApiProvider } from '../providers/api/api';
import { HomeTPage } from "../pages/transportista/home-t/home-t";
import { HomeCPage } from "../pages/cliente/home-c/home-c";
import { SignupPage } from "../pages/signup/signup";
import { CrearSolPage } from "../pages/cliente/crear-sol/crear-sol";
import { SolPenPage } from "../pages/cliente/sol-pen/sol-pen";
import { CotizacionPage } from "../pages/cliente/cotizacion/cotizacion";
import { TrasladosCttdPage } from "../pages/cliente/traslados-cttd/traslados-cttd";
import { MapaPage } from "../pages/cliente/mapa/mapa";
import { SolTrasPage } from "../pages/transportista/sol-tras/sol-tras";
import { VehiculosPage } from "../pages/transportista/vehiculo/vehiculo";
import { EditVehiculoPage } from "../pages/transportista/edit-vehiculo/edit-vehiculo";
import { DetailVehiculoPage } from "../pages/transportista/detail-vehiculo/detail-vehiculo";
import { GalleryVehiPage } from "../pages/transportista/gallery-vehi/gallery-vehi";
import { SendContizacionPage } from "../pages/transportista/send-contizacion/send-contizacion";
import { AddvehiculoPage } from "../pages/transportista/addvehiculo/addvehiculo";
import { AreasServicioPage } from "../pages/transportista/areas-servicio/areas-servicio";
import { MisTrasladosPage } from "../pages/transportista/mis-traslados/mis-traslados";
import { EstadisticaPage } from "../pages/transportista/estadistica/estadistica";
import { DetailSolicPage } from "../pages/transportista/detail-solic/detail-solic";
import { HttpClientModule } from '@angular/common/http';
import { CategoriaServPage } from '../pages/transportista/categoria-serv/categoria-serv';
import { ChangePassPage } from '../pages/change-pass/change-pass';
import { PerfilPage } from '../pages/perfil/perfil';
import { RatePage } from '../pages/cliente/rate/rate';

@NgModule({
  declarations: [
    MyApp,
    MapaPage,
    IonRating,
    RatePage,
    LoginPage,
    HomeTPage,
    HomeCPage,
    SignupPage,
    CrearSolPage,
    SolPenPage,
    CotizacionPage,
    TrasladosCttdPage,
    SolTrasPage,
    VehiculosPage,
    DetailVehiculoPage,
    GalleryVehiPage,
    CategoriaServPage,
    EditVehiculoPage,
    MisTrasladosPage,
    AreasServicioPage,
    DetailSolicPage,
    AddvehiculoPage,
    EstadisticaPage,
    ChangePassPage,
    PerfilPage,
    SendContizacionPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{
      scrollPadding: false,
      scrollAssist: true,
      pageTransition: 'ios-transition'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapaPage,
    IonRating,
    RatePage,
    LoginPage,
    HomeTPage,
    HomeCPage,
    SignupPage,
    CrearSolPage,
    SolPenPage,
    CotizacionPage,
    TrasladosCttdPage,
    SolTrasPage,
    ChangePassPage,
    EstadisticaPage,
    VehiculosPage,
    DetailVehiculoPage,
    GalleryVehiPage,
    EditVehiculoPage,
    CategoriaServPage,
    AreasServicioPage,
    MisTrasladosPage,
    DetailSolicPage,
    AddvehiculoPage,
    SendContizacionPage,
    PerfilPage,
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
