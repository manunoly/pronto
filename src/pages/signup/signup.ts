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
        console.log(data);
        this.paises = data["lista_paises"];
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
        } else {
          let toast = this.toastCtrl.create({
            message: err["message"],
            duration: 5000,
            position: 'bottom',
          });
          toast.present();
        }
      }
    );

  }
  doSignUp(){
    this.api.register(this.user).then(
      data => {
         if (data["status"]==200) {
          let toast = this.toastCtrl.create({
            message: "Se ha registrado satisfactoriamente",
            duration: 5000,
            position: 'bottom',
          });
          toast.present();
          // this.navCtrl.pop();
        }else
        {
          let toast = this.toastCtrl.create({
            message: data["message"],
            duration: 5000,
            position: 'bottom',
          });
          toast.present();
        }
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
        } else {
          let toast = this.toastCtrl.create({
            message: err["message"],
            duration: 5000,
            position: 'bottom',
          });
          toast.present();
        }
      }
    ).catch((err) => {
        let toast = this.toastCtrl.create({
          message: err["message"],
          duration: 5000,
          position: 'bottom',
        });
        toast.present();
      });
  }

  llenarCampos(){
    console.log("campos mal");
    }

}
