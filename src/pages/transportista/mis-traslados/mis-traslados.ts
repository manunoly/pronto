import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Traslado } from '../../../models/traslados';
import { ApiProvider } from '../../../providers/api/api';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Generated class for the MisTrasladosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mis-traslados',
  templateUrl: 'mis-traslados.html',
})
export class MisTrasladosPage {
  traslados:Traslado[];
  stars: string[] = [];
  constructor(public api: ApiProvider) {
    this.api.mis_traslados_realizados(this.api.getUser().transportista_id).then(
      data => {
        if (data['status']==200) {
          this.traslados=data["lista_traslados"];
        }else
        {
           console.log("devolvio error");
        }
      },
      (err: HttpErrorResponse) => {
      console.log("error relacionado con el servidor");
      });
  }

  ionViewDidLoad() {
    this.calc(4)
    console.log('ionViewDidLoad MisTrasladosPage');
  }
  calc(value){

      this.stars = [];
      let tmp = value;
      for(let i=0; i < 5; i++, tmp--)
        if(tmp >= 1)
          this.stars.push("star");
        else if (tmp < 1 && tmp > 0)
          this.stars.push("star-half");
        else
          this.stars.push("star-outline");

  }
  iniciar(traslado_id,item_index){
    this.api.iniciar_trayecto(this.api.getUser().transportista_id,traslado_id).then(
      data => {
        if (data['status']==200) {
          this.traslados[item_index].estado =2;
        }else
        {
           console.log("devolvio error");
        }
      },
      (err: HttpErrorResponse) => {
      console.log("error relacionado con el servidor");
      });

  }
  terminar(traslado_id,item_index){
    this.api.finalizar_trayecto(this.api.getUser().transportista_id,traslado_id).then(
      data => {
        if (data['status']==200) {
          this.traslados[item_index].estado =3;
          this.traslados[item_index].evaluacion =0;
        }else
        {
           console.log("devolvio error");
        }
      },
      (err: HttpErrorResponse) => {
      console.log("error relacionado con el servidor");
      });

  }

}
