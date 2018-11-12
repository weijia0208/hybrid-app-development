import { Component } from '@angular/core';

/**
 * Generated class for the ShouyeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'shouye',
  templateUrl: 'shouye.html'
})
export class ShouyeComponent {

  text: string;

  constructor() {
    console.log('Hello ShouyeComponent Component');
    this.text = 'Hello World';
  }

}
