import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ConceptualScheme } from 'src/app/activities/models/conceptual-scheme';
import { MindScheme } from 'src/app/activities/models/mind-scheme';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {
  @Input() keywords: any;
  @Input() activity: any;
  @Input() activitySelected: string;
  response: any;

  visibleMental = true;
  visibleConseptual = false;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
    this.displayActivity();
  }

  displayActivity() {
     switch (this.activitySelected){
      case 'mental': {
        this.visibleMental = true;
        this.visibleConseptual = false;
        break;
      }
      case 'conceptual': {
        this.visibleMental = false;
        this.visibleConseptual = true;
        break;
      }
    }
  }

  saveActivity(){
    this.presentAlert();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Actividad enviada',
      subHeader: 'Envío exitoso',
      message: 'Actividad enviada a revisión',
      buttons: ['Aceptar']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  saveResponse(event: any){
    switch (this.activitySelected){
      case 'mental': {
        this.response = event as MindScheme;
        break;
      }
      case 'conceptual': {
        this.response = event as ConceptualScheme;
        break;
      }
    }
  }
}
