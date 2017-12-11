import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from "ionic-angular";
import {User} from "../../models/user"
import { ApiProvider } from "../../providers/api/api";
import { HomeCPage } from "../cliente/home-c/home-c";
import { HomeTPage } from "../transportista/home-t/home-t";
import { SignupPage } from "../signup/signup";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user: User;
  constructor( public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public api: ApiProvider ) {
    this.user = new User();
  }

  doLogin() {
    this.api.login(this.user).then(
      data => {
        // if (data["status"]==200) {
          if (data["rol"] == "1")
            this.navCtrl.setRoot(HomeTPage);
          else
            this.navCtrl.setRoot(HomeCPage);

        // }
        // else
        // {
        //   let toast = this.toastCtrl.create({
        //     message: "Correo y/o contraseña incorrectos",
        //     duration: 5000,
        //     position: 'bottom',
        //   });
        //   toast.present();
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
 openSignUp(){
  this.navCtrl.push(SignupPage);
 }

  llenarCampos(){
    console.log("escriba correo y contraseña");
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Olvido de contraseña',
      message: "Escribe tu dirección de email",
      enableBackdropDismiss:false,
      inputs: [
        {
          name: 'email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'

        },
        {
          text: 'Restablecer',
          handler: data => {
           if(this.api.validateEmail( data.email)){
            let toast = this.toastCtrl.create({
              message: "La contraseña se ha enviando a su correo",
              duration: 5000,
              position: 'bottom'
            });
            toast.present();

            const navTransition = prompt.dismiss();

             this.api.recordad_password(data.email).then(
              data => {
                navTransition.then(() => {
                  this.navCtrl.getActiveChildNavs().pop();
                });

              },
              (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                } else {
                }
              });
              return false;
           }
         }
        }
      ]
    });
    prompt.present();
  }

}
