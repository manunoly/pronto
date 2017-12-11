import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { ApiProvider } from '../../../providers/api/api';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../../models/user';
import { AreasServicio ,Pais,Provincia} from '../../../models/listas';

/**
 * Generated class for the AreasServicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-areas-servicio',
  templateUrl: 'areas-servicio.html',
})
export class AreasServicioPage {
  misAreas: AreasServicio[];
  paises:Pais[];
  provicias:Provincia[];
  public CValue:String;
  country_id:number;
  province_id:number;
  user:User;
  constructor(public api: ApiProvider) {
    this.user=api.getUser();
    this.loadSelect();
    this.api.listar_areas_seleccionadas_servicio(this.user.transportista_id).then(
      data => {
        this.misAreas = data["lista_areas"];
      },
      (err: HttpErrorResponse) => {
        console.log("algo salio mal");
      });
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
      });

  }

  onChangeCountry(CValue) {
    this.api.get_provincias(CValue).then(
    data => {
      this.provicias = data["lista_provincias"];
    },
    (err: HttpErrorResponse) => {
      console.log("algo salio mal");
    });
  }
  addArea(){
  this.api.seleccionar_area(this.user.transportista_id,this.province_id).then(
    data => {
      // if (data["status"]==200) {
       let pais = this.paises.find((element,index,array)=> {  return element.country_id == this.country_id},this.country_id);
       let prov = this.provicias.find((element,index,array)=> {  return element.provincia_id == this.province_id},this.province_id);
       this.misAreas.push({nombre:pais.nombre + " - " + prov.nombre,provincia_id:prov.provincia_id});
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
deleteArea(areaId){
  this.api.eliminar_servicio_prestado(this.user.transportista_id,this.province_id).then(
    data => {
      // if (data["status"]==200) {
      this.misAreas = this.misAreas.filter((element,index,array)=> {  return element.provincia_id !== areaId});
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
