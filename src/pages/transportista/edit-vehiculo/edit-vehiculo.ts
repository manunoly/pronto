import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ToastController } from 'ionic-angular';
import { Vehiculo } from '../../../models/vehiculo';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiProvider } from '../../../providers/api/api';
import { Marca, Tipo_vehiculo, Modelo,Provincia ,Pais} from '../../../models/listas';

@IonicPage()
@Component({
  selector: 'page-edit-vehiculo',
  templateUrl: 'edit-vehiculo.html',
})
export class EditVehiculoPage {
  vehiculo:Vehiculo;
  marcas:Marca[] = [];
  modelos:Modelo[] = [];
  tipos_v:Tipo_vehiculo[] = [];
  paises:Pais;
  provicias:Provincia;
  public CValue:String;
  public marcaValue:number;
  constructor(public events: Events,public toastCtrl: ToastController,public api: ApiProvider,public navCtrl: NavController, public navParams: NavParams) {
     this.vehiculo=new Vehiculo();
     //tienen q venir los id si no cmomo se a va entarar xd
     this.vehiculo.marca_id=1;
     this.loadSelect();

      this.api.detalle_vehiculo(this.navParams.get("id")).then(
      data => {
        this.vehiculo = data
      },
      (err: HttpErrorResponse) => {
        console.log("error relacionado con el servidor");
      });
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
  saveVehiculo() {
    this.api.editar_vehiculo(this.vehiculo).then(
      data => {
        //  if (data["status"]==200) {
          this.events.publish('edit:vehiculo');
          let toast = this.toastCtrl.create({
            message: "Vehiculo editado",
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

}
