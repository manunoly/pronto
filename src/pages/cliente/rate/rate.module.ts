import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RatePage } from './rate';
import {IonRating} from  '../../../components/ion-rating/ion-rating'

@NgModule({
  declarations: [
    RatePage,
    IonRating
  ],
  imports: [
    IonicPageModule.forChild(RatePage),
  ],
})
export class RatePageModule {}
