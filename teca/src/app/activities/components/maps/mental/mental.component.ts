import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MindresponseL_R } from 'src/app/activities/interfaces/mindset-response';
import { PopUpPage } from 'src/app/activities/shared/pop-up/pop-up.page';


@Component({
  selector: 'app-mental',
  templateUrl: './mental.component.html',
  styleUrls: ['./mental.component.scss'],
})
export class MentalComponent implements OnInit {
  mainIdeas = [];
  IdeasOrden = [];
  isOpen = true;
  constructor(private modalCtrl: ModalController) { }
  ngOnInit() {
  }


  ActualizarIdeas(IdeasNew:any){
    this.mainIdeas = IdeasNew
    this.IdeasOrden = []
    AcomodarIdeas(this.IdeasOrden,this.mainIdeas)
    console.log(this.IdeasOrden)
  }

  async abrirModal(){
    if(this.isOpen && this.mainIdeas.length === 0){
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
          this.addPrincipalIdea(valor)
        }else{
          this.isOpen = true;
        }
        
    });
    await modal.present();
    this.isOpen = false;
  }
  }

  addPrincipalIdea(valor :string){
    const newIdea: MindresponseL_R = {
      id: this.mainIdeas.length + 1,
      principalIdea: valor,
      sub: [],
      cant: 1,
      idPadre : 0,
    };
    this.mainIdeas.push(newIdea);
    this.IdeasOrden.push(newIdea);
  }
  
}

function AcomodarIdeas(IdeasOrd:any,mainIdeas:any) {

  if(mainIdeas[0].id === 1){
    var arregloDeArreglos = [];
    const LONGITUD_PEDAZOS = mainIdeas[0].sub.length/2;
    for (let i = 0; i < mainIdeas[0].sub.length; i += LONGITUD_PEDAZOS) {
      let pedazo = mainIdeas[0].sub.slice(i, i + LONGITUD_PEDAZOS);
      arregloDeArreglos.push(pedazo);
    }

    if(arregloDeArreglos.length>0 && arregloDeArreglos[0].length>0){
      AcomodarIdeas(IdeasOrd,arregloDeArreglos[0])
    }
    IdeasOrd.push(mainIdeas[0])
    if(arregloDeArreglos.length>0 && arregloDeArreglos[1].length>0){
      AcomodarIdeas(IdeasOrd,arregloDeArreglos[1])
    }

  }else{
    for (let i = 0; i < mainIdeas.length; i++) {
    if(mainIdeas[i].sub.length>0){
        AcomodarIdeas(IdeasOrd,mainIdeas[i].sub)
      }
        IdeasOrd.push(mainIdeas[i])
  }

  }
}

