import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditVehiculoPage } from './edit-vehiculo';

@NgModule({
  declarations: [
    EditVehiculoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditVehiculoPage),
  ],
})
export class EditVehiculoPageModule {}
