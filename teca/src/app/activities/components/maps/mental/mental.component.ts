import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MindResponse } from 'src/app/activities/interfaces/mindset-response';
import { PopUpPage } from 'src/app/activities/shared/pop-up/pop-up.page';

@Component({
  selector: 'app-mental',
  templateUrl: './mental.component.html',
  styleUrls: ['./mental.component.scss'],
})
export class MentalComponent implements OnInit {
  mainIdeas = [];
  constructor(private modalCtrl: ModalController) { }
  IdeaPrincipal = ""
  ngOnInit() {
  }

  async abrirModal(is: any){
    if(this.IdeaPrincipal === ""|| is){
    const modal = await this.modalCtrl.create({
      component: PopUpPage,
      keyboardClose: true,
      cssClass: 'modalCss',
      componentProps: {
      },
      
    });
    modal.onDidDismiss()
      .then((data) => {
        var valor = data["data"];
        if(valor){
          this.IdeaPrincipal = valor;
        }
        
    });
    await modal.present();
  }
  }

  addPrincipalIdea(){
    const newIdea: MindResponse = {
      id: this.mainIdeas.length + 1,
      principalIdea: 'ideaPrincipal',
      leafs: [],
    };
    this.mainIdeas.push(newIdea);
  }
  addSecondaryIdea(i: number){
    if (this.mainIdeas[i].leafs.length < 2){
      this.mainIdeas[i].leafs.push('idea secundaria');
    }
  }

}

