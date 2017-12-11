import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriaServPage } from './categoria-serv';

@NgModule({
  declarations: [
    CategoriaServPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoriaServPage),
  ],
})
export class CategoriaServPageModule {}
