import { Component, Input, OnInit} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Synonym } from 'src/app/activities/models/synonym';
import { Analogy } from '../../../models/analogy';
import { ComparativeChart } from '../../../models/comparative-chart';
import { Mnemonic } from '../../../models/mnemonic';
import { ActivityService } from '../../../services/activity.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  @Input() keywords: any;
  @Input() activity: any;
  @Input() activitySelected: string='';
  response: any;
  visibleAnalogies=true;
  visibleComparative=false;
  visibleSynonyms=false;
  visibleMnemonics=false;
  constructor(
    public alertController: AlertController
    , private activityService: ActivityService) { }

  ngOnInit() {
    console.log('Este es el cuadro que selecciioné');
    console.log(this.activitySelected);
    this.displayActivity();
  }

  displayActivity(){
    switch(this.activitySelected){
      case 'analogías':{
        this.visibleAnalogies = true;
        this.visibleComparative=false;
        this.visibleSynonyms=false;
        this.visibleMnemonics=false;
        break;
      }
      case 'comparativo':{
        this.visibleComparative=true;
        this.visibleAnalogies = false;
        this.visibleSynonyms=false;
        this.visibleMnemonics=false;
        break;
      }
      case 'sinonimos':{
        this.visibleSynonyms=true;
        this.visibleComparative=false;
        this.visibleAnalogies = false;
        this.visibleMnemonics=false;
        break;
      }
      case 'mnemotecnia':{
        this.visibleMnemonics=true;
        this.visibleSynonyms=false;
        this.visibleComparative=false;
        this.visibleAnalogies = false;
        break;
      }
    }
  }

  saveActivity(){
    console.log(this.response );
    this.presentAlert();
    switch(this.activitySelected){
      case 'analogía':{
        this.activityService.createAnalogy(this.response);
        this.presentAlert();
        break;
      }
      case 'comparativo':{
        this.activityService.createComparative
     
        break;
      }
      case 'sinonimos':{
        this.activityService.createSynonyms

     
        break;
      }
      case 'mnemotecnia':{
        this.activityService.createMnemonic
        break;
      }
    }
  }

  saveResponse(event: any){
    switch(this.activitySelected){
      case 'analogía':{
        this.response = event as Analogy;
        console.log('Esta es la respuesta enviada aplicando casting');
        console.log(this.response.responses);
       
        break;
      }
      case 'comparativo':{
        this.response = event as ComparativeChart;
     
        break;
      }
      case 'sinonimos':{
        this.response = event as Synonym;
     
        break;
      }
      case 'mnemotecnia':{
        this.response = event as Mnemonic;
        break;
      }
    }
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



}
