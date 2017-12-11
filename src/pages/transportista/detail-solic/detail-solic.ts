import { Component } from '@angular/core';
import { IonicPage,  NavParams, ModalController, ToastController } from 'ionic-angular';
import { Solicitud } from '../../../models/solicitud';
import { SendContizacionPage } from '../../transportista/send-contizacion/send-contizacion';
import { ApiProvider } from '../../../providers/api/api';
import { HttpErrorResponse } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-detail-solic',
  templateUrl: 'detail-solic.html',
})
export class DetailSolicPage {
  // solicitud:any={};
  solicitud:Solicitud
  sendCotizacion:boolean;
  constructor(public toastCtrl: ToastController,public modalCtrl: ModalController,public api: ApiProvider, public navParams: NavParams) {
    this.solicitud=this.navParams.get("solicitud");
    // this.api.detalle_solicitud(this.navParams.get("solicitud")).then(
    //   data => {
    //     if (data['status']==200) {
    //       this.solicitud=data;
    //     }else
    //     {
    //        console.log("devolcvio error");
    //     }
    //   },
    //   (err: HttpErrorResponse) => {
    //   console.log("error relacionado con el servidor");
    //   });
  }

  ionViewDidLoad() {
    this.sendCotizacion=false;
  }
  enviarCotizacion(){

    const cotizacionModal = this.modalCtrl.create(SendContizacionPage);
    cotizacionModal.onDidDismiss(data => {
      if (data) {
       this.api.enviar_propuesta(this.api.getUser().transportista_id,this.solicitud.solicitud_id,data.cotizacion_val,data.cotizacion_des).then(
          data => {

            // if (data['status']==200) {
              if (!this.solicitud.cotizacion_enviada ) {
                this.solicitud.cotizacion_enviada =1;
              }
              let toast = this.toastCtrl.create({
                message: "Cotización enviada",
                duration: 5000,
                position: 'bottom',
              });
              toast.present();
            // }else
            // {
               //console.log("devolcvio error");
            // }
          },
          (err: HttpErrorResponse) => {
          console.log("error relacionado con el servidor");
          });
      }
    });
    cotizacionModal.present();
  }

}
