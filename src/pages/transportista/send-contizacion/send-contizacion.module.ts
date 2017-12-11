import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendContizacionPage } from './send-contizacion';

@NgModule({
  declarations: [
    SendContizacionPage,
  ],
  imports: [
    IonicPageModule.forChild(SendContizacionPage),
  ],
})
export class SendContizacionPageModule {}
