import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ApiProvider } from '../../../providers/api/api';
import { HttpErrorResponse } from '@angular/common/http';
import { Servicios_P } from '../../../models/listas';
import { User } from '../../../models/user';


@IonicPage()
@Component({
  selector: 'page-categoria-serv',
  templateUrl: 'categoria-serv.html',
})
export class CategoriaServPage {
  all_servicios_P: Servicios_P[];
  my_servicios_P: Servicios_P[];
  user:User;
  serv_selected:number;

  constructor(public api: ApiProvider ) {
    this.user=api.getUser();
    this.loadSelect();
    this.api.obtener_mis_servicios_prestados(this.user.transportista_id).then(
      data => {
        this.my_servicios_P = data["lista_servicios"];
      },
      (err: HttpErrorResponse) => {
        console.log("algo salio mal");
      });
  }


  loadSelect() {
  //  cargar todo los sevicios prestados
    this.api.obtener_todos_servicios_prestados().then(
      data => {
        this.all_servicios_P = data["lista_servicios"];
      },
      (err: HttpErrorResponse) => {
        console.log("algo salio mal");
      });
  }

  addServicio(){
    this.api.adicionar_servicio_prestado(this.user.transportista_id,this.serv_selected).then(
      data => {
        // if (data["status"]==200) {
         let serv = this.all_servicios_P.find((element,index,array)=> {  return element.servicio_id == this.serv_selected},this.serv_selected);
         this.my_servicios_P.push({nombre:serv.nombre,servicio_id:serv.servicio_id});
        // }
        // else
        // {
        //   console.log("algo salio mal");
        // }
      },
      (err: HttpErrorResponse) => {
        console.log("algo salio mal");
      }
    );
  }
  deleteServicio(service_id){
    this.api.eliminar_servicio_prestado(this.user.transportista_id,service_id).then(
      data => {
        // if (data["status"]==200) {
          console.log()
        this.my_servicios_P = this.my_servicios_P.filter((element,index,array)=> {  return element.servicio_id !== service_id});
        // }
        // else
        // {
        //   console.log("algo salio mal");
        // }
      },
      (err: HttpErrorResponse) => {
        console.log("algo salio mal");
      }
    );
  }


}
