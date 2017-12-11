import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { ApiProvider } from '../../providers/api/api';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  user:User=new User();
  constructor(public navCtrl: NavController, public api: ApiProvider, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
   this.user = this.api.getUser();
  }
  saveProfile(){
    this.api.cambiar_datos_perfil(this.user).then(
      data => {
        // if (data["status"]==200) {
          let toast = this.toastCtrl.create({
            message: "Perfil editado",
            duration: 5000,
            position: 'bottom',
          });
          toast.present();
        // }else
        // {
          // let toast = this.toastCtrl.create({
          //   message: "Ya existe usuario con ese correo",
          //   duration: 5000,
          //   position: 'bottom',
          // });
          // toast.present();
        //   console.log("algo salio mal");
        // }
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
        } else {
        }
      }
    );
  }

  llenarCampos(){
    console.log("campos mal");
    }

}
