import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
//import { MyPopOverPage } from './my-pop-over';

@Component({
  template: `
    <ion-list class="popover-page">
      <ion-list-header>Ionic</ion-list-header>
      <button ion-item (click)="close()">Learn Ionic</button>
      <button ion-item (click)="close()">Documentation</button>
      <button ion-item (click)="close()">Showcase</button>
      <button ion-item (click)="close()">GitHub Repo</button>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }
}


@Component({
  selector: 'page-music',
  templateUrl: 'music.html'
})
export class MusicPage {

  constructor(public navCtrl: NavController) {

  }


}


