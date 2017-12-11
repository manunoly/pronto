import { Component } from '@angular/core';
import { IonicPage, ToastController} from 'ionic-angular';
import { Md5 } from 'ts-md5/dist/md5';
import { ApiProvider } from '../../providers/api/api';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Generated class for the ChangePassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-pass',
  templateUrl: 'change-pass.html',
  providers: [Md5]
})
export class ChangePassPage {

  anterior_pass:string;
  new_pass:string;
  confirm_new_pass:string;
  constructor(public _md5: Md5,public api: ApiProvider,public toastCtrl: ToastController) {

  }
  cambiar_password(){
    let a = this._md5.appendStr(this.anterior_pass).end();
    let n = this._md5.appendStr(this.new_pass).end();
    this.api.cambiar_password(a,n).then(
      data => {
        let toast = this.toastCtrl.create({
          message: "Contraseña cambiada ",
          duration: 5000,
          position: 'bottom',
        });
        toast.present();
        this.anterior_pass=null;
        this.new_pass=null;
        this.confirm_new_pass=null;
      },
      (err: HttpErrorResponse) => {
        console.log("algo salio mal");
      });;

  }

}
