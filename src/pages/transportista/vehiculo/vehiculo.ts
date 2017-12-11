import { Component } from '@angular/core';
import { IonicPage, NavController, Events } from 'ionic-angular';
import { User } from '../../../models/user';
import { ApiProvider } from '../../../providers/api/api';
import { Vehiculo } from '../../../models/vehiculo';
import { HttpErrorResponse } from '@angular/common/http';
import { AddvehiculoPage } from '../addvehiculo/addvehiculo';
import { DetailVehiculoPage } from '../detail-vehiculo/detail-vehiculo';
import { EditVehiculoPage } from '../edit-vehiculo/edit-vehiculo';
import { GalleryVehiPage } from '../gallery-vehi/gallery-vehi';

/**
 * Generated class for the VehiculoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vehiculo',
  templateUrl: 'vehiculo.html',
})
export class VehiculosPage {
  user: User = new User();
  vehiculos:Vehiculo[]=[];
  constructor(public events: Events,public navCtrl: NavController,public api: ApiProvider) {
    this.user = this.api.getUser();
    this.load_vehiculos();
  }
  load_vehiculos(){
    this.api.get_vehiculos(this.user.transportista_id).then(
      data => {
        if (data['status']==200) {
          this.vehiculos=data["lista_vehiculos"];
        }else
        {
           console.log("devolcvio error");
        }

      },
      (err: HttpErrorResponse) => {
      console.log("error relacionado con el servidor");
      });
  }
  addVehiculo(){
      this.navCtrl.push(AddvehiculoPage);
  }
  delete(id){
  this.api.eliminar_vehiculo(id).then(
    data => {
      console.log(data);
      this.vehiculos = this.vehiculos.filter(function(item){
        return item.vehiculo_id !== id;
      });
    },
    (err: HttpErrorResponse) => {
    console.log("error relacionado con el servidor");
    });
  }
  detail(id,index){
    this.navCtrl.push(DetailVehiculoPage,{
      id:id,
      vehiculo:this.vehiculos[index]
    });
  }
  edit(id){
    this.navCtrl.push(EditVehiculoPage,{
      id:id
    });
  }

  openGallery(id,index){
    console.log("galeria");
    this.navCtrl.push(GalleryVehiPage,{
      id:id,
      vehiculo:this.vehiculos[index]
    });
  }

  ionViewWillEnter() {

    this.events.subscribe('edit:vehiculo', () => {
      this.load_vehiculos();
    });

    this.events.subscribe('add:vehiculo', (vehiculo) => {
      // this.load_vehiculos(); para cargar el vehiculo que se agrego
      this.vehiculos.push(vehiculo);

      });
    }
}
