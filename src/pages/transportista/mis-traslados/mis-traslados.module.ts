import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MisTrasladosPage } from './mis-traslados';

@NgModule({
  declarations: [
    MisTrasladosPage,
  ],
  imports: [
    IonicPageModule.forChild(MisTrasladosPage),
  ],
})
export class MisTrasladosPageModule {}
