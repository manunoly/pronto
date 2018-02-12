import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";



@IonicPage()
@Component({
  selector: 'page-rate',
  templateUrl: 'rate.html',
})
export class RatePage {
  value: number;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.value = this.navParams.get("rated") ? this.navParams.get("rated"):1
  }
  close(){
    let data = { 'rate': "cancel" };
    this.viewCtrl.dismiss(data);
  }

  starClicked(value){
    this.value = value;

  }
  sendRate(){
    let data = { 'rate': this.value };
    this.viewCtrl.dismiss(data);
  }


}
