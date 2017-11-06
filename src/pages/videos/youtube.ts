import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component ({

    selector: 'page-youtube',
    template: 
    `
    <ion-header>
    
    <ion-navbar>
    
    <ion-title>YouTube Video</ion-title>
 
    </ion-navbar>
    
    </ion-header>

    <ion-content>
    
    <iframe width="640" height="360" src="https://www.youtube.com/embed/QexqcdWcULY" frameborder="0" allowfullscreen></iframe>
    
    </ion-content>  
  
    `

})

export class YoutubeVideo {

    constructor(public navCtrl: NavController) {
        
    }
}