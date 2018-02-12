import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LoginPage } from "../../login/login";
import { User } from '../../../models/user';
import { ApiProvider } from '../../../providers/api/api';



@IonicPage()
@Component({
  selector: 'page-home-c',
  templateUrl: 'home-c.html',
})
export class HomeCPage {
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
  openAdd(){
    this.navCtrl.push('CrearSolPage');
  }
  openPendiente(){
    this.navCtrl.push('SolPenPage');
  }
  openTrasladosCttd(){
    this.navCtrl.push('TrasladosCttdPage');
  }
  openChangePass(){
    this.navCtrl.push('ChangePassPage');
  }
  openPerfil(){
    this.navCtrl.push('PerfilPage');
  }

}
