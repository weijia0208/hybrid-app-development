import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  num = 1;
  constructor(public navCtrl: NavController) {

  }

  change(i){
    this.num = i;
  }
}
