import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeTPage } from './home-t';

@NgModule({
  declarations: [
    HomeTPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeTPage),
  ],
})
export class HomePageModule {}
