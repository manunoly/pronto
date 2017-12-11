import { Component } from '@angular/core';
import { IonicPage, ToastController, Events } from 'ionic-angular';
import { Vehiculo } from '../../../models/vehiculo';
import { ApiProvider } from '../../../providers/api/api';
import { HttpErrorResponse } from '@angular/common/http';
import { Marca ,Modelo, Tipo_vehiculo,Pais,Provincia} from '../../../models/listas';

@IonicPage()
@Component({
  selector: 'page-addvehiculo',
  templateUrl: 'addvehiculo.html',
})
export class AddvehiculoPage {
  vehiculo:Vehiculo;
  marcas:Marca[] = [];
  modelos:Modelo[] = [];
  tipos_v:Tipo_vehiculo[] = [];
  paises:Pais;
  provicias:Provincia;
  public CValue:String;
  public marcaValue:number;
  constructor(public events: Events,public toastCtrl: ToastController, public api: ApiProvider) {
    this.vehiculo = new Vehiculo();
    this.loadSelect()

  }

  addVehiculo() {
    this.api.add_vehiculo(this.vehiculo,this.api.getUser().transportista_id).then(
      data => {
        //  if (data["status"]==200) {
          this.vehiculo.marca="Marca";
          this.vehiculo.modelo="Modelo";
          this.events.publish('add:vehiculo', this.vehiculo);
          let toast = this.toastCtrl.create({
            message: "Vehiculo adicionado",
            duration: 5000,
            position: 'bottom',
          });
          toast.present();
          this.vehiculo = new Vehiculo();

        // }
        // else
        // {
        //   console.log("algo salio mal");
        // }
      })

 }
  llenarCampos(){
    let toast = this.toastCtrl.create({
      message: "Llenar los campos requeridos",
      duration: 5000,
      position: 'bottom',
    });
    toast.present();
  }

  loadSelect() {
    //cargara las marcas de los autos
    this.api.lista_marcas().then(
      data => {
        this.marcas = data["lista_marcas"];
      },
      (err: HttpErrorResponse) => {
        console.log("algo salio mal");
      });

      //cargar los tipos de vehiculos
    this.api.cargar_tipos_vehiculos().then(
      data => {
        this.tipos_v = data["lista_tipos"];
      },
      (err: HttpErrorResponse) => {
        console.log("algo salio mal");
      });
    //cargar los paises
      this.api.get_paises().then(
        data => {
          this.paises = data["lista_paises"];
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
          } else {
          }
        }
      );

  }
  onChangeMarca(marcaValue) {
    this.api.cargar_modelos_autos(marcaValue).then(
    data => {
      this.modelos = data["lista_modelo"];
    },
    (err: HttpErrorResponse) => {
      console.log("algo salio mal");
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


}
