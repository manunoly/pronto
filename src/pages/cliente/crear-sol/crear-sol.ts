import {Component} from '@angular/core';
import {IonicPage, NavController, ToastController, ViewController} from 'ionic-angular';
import {ApiProvider} from '../../../providers/api/api';
import {Solicitud} from '../../../models/solicitud';
import {HttpErrorResponse} from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-crear-sol',
  templateUrl: 'crear-sol.html',
})
export class CrearSolPage {
  solicitud: Solicitud = new Solicitud();

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public toastCtrl: ToastController, public api: ApiProvider) {

  }

  addSol() {
    this.api.crear_solicitud(this.solicitud).then(
      () => {
        let toast = this.toastCtrl.create({
          message: "Solicitud creada",
          duration: 5000,
          position: 'bottom',
        });
        toast.present();
        this.viewCtrl.dismiss();
      },
      (err: HttpErrorResponse) => {
        console.log("algo mal en el servidor",err);
      });
  }

  static llenarCampos() {
    console.log("faltan campos");
  }

}
