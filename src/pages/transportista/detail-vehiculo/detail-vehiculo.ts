import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Vehiculo } from '../../../models/vehiculo';
import { ApiProvider } from '../../../providers/api/api';



@IonicPage()
@Component({
  selector: 'page-detail-vehiculo',
  templateUrl: 'detail-vehiculo.html',
})
export class DetailVehiculoPage {
  vehiculo:Vehiculo;
  constructor(public api: ApiProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.vehiculo=this.navParams.get("vehiculo");
    // this.api.detalle_vehiculo(this.navParams.get("id")).then(
    //   data => {
    //     this.vehiculo = data
    //   },
    //   (err: HttpErrorResponse) => {
    //     console.log("error relacionado con el servidor");
    //   });

  }
}
