import { Component } from '@angular/core';
import { IonicPage,  NavController} from "ionic-angular";
import { ApiProvider } from '../../../providers/api/api';
import { Solicitud } from '../../../models/solicitud';
import { HttpErrorResponse } from '@angular/common/http';
import { DetailSolicPage } from '../detail-solic/detail-solic';



@IonicPage()
@Component({
  selector: 'page-sol-tras',
  templateUrl: 'sol-tras.html',
})
export class SolTrasPage {
  solicitudes:Solicitud[];
  constructor(public navCtrl: NavController,public api: ApiProvider) {
    this.api.listar_solicitudes_servicio_activas().then(
      data => {
        if (data['status']==200) {
          this.solicitudes=data["lista_solicitudes_activas"];
        }else
        {
           console.log("devolcvio error");
        }
      },
      (err: HttpErrorResponse) => {
      console.log("error relacionado con el servidor");
      });
  }
  openDetalleSol(solicitud,solicitud_id){
     this.navCtrl.push(DetailSolicPage,{
       solicitud:solicitud, //paso todo el servicio
        solicitud_id:solicitud_id
     });
  }

}
