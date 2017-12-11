import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SolPenPage } from './sol-pen';

@NgModule({
  declarations: [
    SolPenPage,
  ],
  imports: [
    IonicPageModule.forChild(SolPenPage),
  ],
})
export class SolPenPageModule {}
