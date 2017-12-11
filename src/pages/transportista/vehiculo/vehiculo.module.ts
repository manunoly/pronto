import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehiculosPage } from './vehiculo';

@NgModule({
  declarations: [
    VehiculosPage,
  ],
  imports: [
    IonicPageModule.forChild(VehiculosPage),
  ],
})
export class VehiculoPageModule {}
