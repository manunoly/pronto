import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { User } from "../../models/user";
import { ApiProvider } from "../../providers/api/api";
import { Pais ,Provincia} from '../../models/listas';
import { HttpErrorResponse } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user: User;
  paises:Pais;
  provicias:Provincia;
  public CValue:String;

  constructor(public navCtrl: NavController, public api: ApiProvider, public toastCtrl: ToastController) {
    this.user = new User();
    this.loadSelect()
  }

  ionViewDidLoad() {

  }

  onChangeCountry(CValue) {
        this.api.get_provincias(CValue).then(
      data => {
        this.provicias = data["lista_provincias"];
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
        } else {
        }
      }
    );
  }

  loadSelect() {
    this.api.get_paises().then(
      data => {
        this.paises = data["lista_paises"];
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
        } else {
        }
      }
    );

  }
  doSignUp(){
    this.api.register(this.user).then(
      data => {
        // if (data["status"]==200) {
          let toast = this.toastCtrl.create({
            message: "Se ha registrado satisfactoriamente",
            duration: 5000,
            position: 'bottom',
          });
          toast.present();
          this.navCtrl.pop();
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
