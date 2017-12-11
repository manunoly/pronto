import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Vehiculo } from '../../../models/vehiculo';
import { ApiProvider } from '../../../providers/api/api';


@IonicPage()
@Component({
  selector: 'page-gallery-vehi',
  templateUrl: 'gallery-vehi.html',
})
export class GalleryVehiPage {
  vehiculo:Vehiculo;
  constructor( public api: ApiProvider,public navParams: NavParams) {
    this.vehiculo=this.navParams.get("vehiculo");
    // this.api.detalle_vehiculo(this.navParams.get("id")).then(
    //   data => {
    //     this.vehiculo = data
    //   },
    //   (err: HttpErrorResponse) => {
    //     console.log("error relacionado con el servidor");
    //   });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryVehiPage');
  }

}
