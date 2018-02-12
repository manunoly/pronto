import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ApiProvider } from "../../../providers/api/api";
import { User } from '../../../models/user';
import {LoginPage} from '../../login/login'


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
    this.navCtrl.push('SolTrasPage');
  }
  openVehiculo(){
    this.navCtrl.push('VehiculosPage');
  }
  openCategServ(){
    this.navCtrl.push('CategoriaServPage');
  }
  openCobertura(){
    this.navCtrl.push('AreasServicioPage');
  }
  openMisTraslados(){
    this.navCtrl.push('MisTrasladosPage');
  }

  openEstadistica(){
    this.navCtrl.push('EstadisticaPage');
  }
  openChangePass(){
    this.navCtrl.push('ChangePassPage');
  }
  openPerfil(){
    this.navCtrl.push('PerfilPage');
  }

}
