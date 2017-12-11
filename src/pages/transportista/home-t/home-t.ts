import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ApiProvider } from "../../../providers/api/api";
import { LoginPage } from "../../login/login";
import { SolTrasPage } from "../../transportista/sol-tras/sol-tras";
import { VehiculosPage } from "../../transportista/vehiculo/vehiculo";
import { User } from '../../../models/user';
import { CategoriaServPage } from '../categoria-serv/categoria-serv';
import { AreasServicioPage } from '../areas-servicio/areas-servicio';
import { MisTrasladosPage } from '../mis-traslados/mis-traslados';
import { ChangePassPage } from '../../change-pass/change-pass';
import { EstadisticaPage } from '../estadistica/estadistica';
import { PerfilPage } from '../../perfil/perfil';


@IonicPage()
@Component({
  selector: 'page-home-t',
  templateUrl: 'home-t.html',
})
export class HomeTPage {
  user: User;
  constructor(public navCtrl: NavController, public api: ApiProvider) {
    this.user = new User();
  }

  ionViewDidLoad() {
    this.user = this.api.getUser();
  }
  exit(){
    localStorage.removeItem('prontoUser');
    this.navCtrl.setRoot(LoginPage);
  }
  openSolTras(){
    this.navCtrl.push(SolTrasPage);
  }
  openVehiculo(){
    this.navCtrl.push(VehiculosPage);
  }
  openCategServ(){
    this.navCtrl.push(CategoriaServPage);
  }
  openCobertura(){
    this.navCtrl.push(AreasServicioPage);
  }
  openMisTraslados(){
    this.navCtrl.push(MisTrasladosPage);
  }

  openEstadistica(){
    this.navCtrl.push(EstadisticaPage);
  }
  openChangePass(){
    this.navCtrl.push(ChangePassPage);
  }
  openPerfil(){
    this.navCtrl.push(PerfilPage);
  }

}
