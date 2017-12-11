import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailVehiculoPage } from './detail-vehiculo';

@NgModule({
  declarations: [
    DetailVehiculoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailVehiculoPage),
  ],
})
export class DetailVehiculoPageModule {}
