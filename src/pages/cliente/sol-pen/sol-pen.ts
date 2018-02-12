import { Component } from '@angular/core';
import { IonicPage, NavController, Events } from 'ionic-angular';
import { Solicitud } from '../../../models/solicitud';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiProvider } from '../../../providers/api/api';


@IonicPage()
@Component({
  selector: 'page-sol-pen',
  templateUrl: 'sol-pen.html',
})
export class SolPenPage {
  solicitudes:Solicitud[]=[];
  constructor(public events: Events,public navCtrl: NavController,public api: ApiProvider) {

    this.api.mis_solicitudes_ejecutadas(this.api.getUser().transportista_id).then(
      data => {
        if (data['status']==200) {
          this.solicitudes=data["lista_solicitudes"];
        }else
        {
           console.log("devolcvio error");
        }
      },
      (err: HttpErrorResponse) => {
      console.log("error relacionado con el servidor");
      });
  }

  openCotizacion(index,solicitud_id){
    this.navCtrl.push('CotizacionPage',{
      solicitud:solicitud_id
    });
  }

  ionViewWillEnter() {

        this.events.subscribe('accept:cotizacion', (solicitud_id) => {
          this.solicitudes = this.solicitudes.filter((element,index,array)=> {  return element.solicitud_id !== solicitud_id});
          });
        }


}
