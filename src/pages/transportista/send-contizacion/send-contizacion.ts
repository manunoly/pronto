import { Component } from '@angular/core';
import {
  IonicPage,
  ViewController
} from "ionic-angular";

@IonicPage()
@Component({
  selector: 'page-send-contizacion',
  templateUrl: 'send-contizacion.html',
})

export class SendContizacionPage {
  cotizacion_val:number;
  cotizacion_des:string;

  constructor(public viewCtrl: ViewController) {
  }

  close(){
    this.viewCtrl.dismiss();
  }
  enviar() {
    let data = { cotizacion_val: this.cotizacion_val,cotizacion_des:this.cotizacion_des };
    this.viewCtrl.dismiss(data);
  }


}
