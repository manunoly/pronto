import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Traslado } from '../../../models/traslados';
import { ApiProvider } from '../../../providers/api/api';
import { HttpErrorResponse } from '@angular/common/http';
import { RatePage } from '../../cliente/rate/rate';
import { MapaPage } from '../mapa/mapa';

/**
 * Generated class for the TrasladosCttdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-traslados-cttd',
  templateUrl: 'traslados-cttd.html',
})
export class TrasladosCttdPage {
  traslados:Traslado[];
  constructor(public api: ApiProvider,public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
    this.api.mis_solicitudes_ejecutandose(this.api.getUser().transportista_id).then(
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
    console.log('ionViewDidLoad TrasladosCttdPage');
  }
  openRate(){
    const profileModal = this.modalCtrl.create(RatePage);
    profileModal.onDidDismiss(data => {

    });

    profileModal.present();
  }
  mapa(){
    this.navCtrl.push(MapaPage);
  }

}
