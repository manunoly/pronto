import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeCPage } from './home-c';

@NgModule({
  declarations: [
    HomeCPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeCPage),
  ],
})
export class HomeCPageModule {}
