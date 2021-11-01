import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { MindresponseL_R } from "src/app/activities/interfaces/mindset-response";
import { PopUpPage } from "src/app/activities/shared/pop-up/pop-up.page";

var IdIdea ="";

@Component({
  selector: "app-mental",
  templateUrl: "./mental.component.html",
  styleUrls: ["./mental.component.scss"],
})
export class MentalComponent implements OnInit{
  mainIdeas = [];
  IdeasOrd = [];
  Center = [];
  isOpen = true;
  idea: any;
  
  constructor(private modalCtrl: ModalController) {}
  ngOnInit(){
  }

  ActualizarIdeas(IdeasNew: any) {
    this.mainIdeas = IdeasNew;
    this.IdeasOrd = [];
    this.SepararIdeas(this.IdeasOrd,this.mainIdeas);
   
  }

  async abrirModal() {
    if (this.isOpen && this.mainIdeas.length === 0) {
      const modal = await this.modalCtrl.create({
        component: PopUpPage,
        keyboardClose: true,
        cssClass: "modalCss",
        componentProps: {},
      });
      modal.onDidDismiss().then((data) => {
        var valor = data["data"];
        if (valor) {
          this.addPrincipalIdea(valor);
        } else {
          this.isOpen = true;
        }
      });
      await modal.present();
      this.isOpen = false;
    }
  }

  addPrincipalIdea(valor: string) {
    const newIdea: MindresponseL_R = {
      id: this.mainIdeas.length + 1,
      principalIdea: valor,
      sub: [],
      cant: 1,
      idPadre: 0,
      px:100,
      py:125,
    };
    this.mainIdeas.push(newIdea);
    this.Center.push(newIdea);
  }

  SepararIdeas(IdeasOrd: any, mainIdeas: any) {
  
    if (mainIdeas[0].sub.length > 0) {
      this.getsecundaryIdeas(IdeasOrd,mainIdeas[0].sub, 0);
      IdeasOrd.sort((a, b) => b.idPadre - a.idPadre);
    }

  }

  getsecundaryIdeas(IdeasOrd: any, Ideas: any, l: number) {
    for (let i = 0; i < Ideas.length; i++) {
      if (l === 1) IdeasOrd.push(Ideas[i]);
      if (Ideas[i].sub.length > 0) {
        this.getsecundaryIdeas(IdeasOrd, Ideas[i].sub, l);
      }
      if (l === 0) IdeasOrd.push(Ideas[i]);
    }
  }

  cambiarPosicion(id:string) {
    IdIdea = "n-"+id;
    document.addEventListener("pointermove", this.getPositionMouse, false);
  }
  getPositionMouse(e) {
    var idea = document.getElementById(IdIdea);
    var elemento = document.getElementById("principal");
    var posicion = elemento.getBoundingClientRect();
    var xPosition = e.clientX - (posicion.x+50);
    var yPosition = e.clientY - (posicion.y+50);
    if(xPosition>=20 && yPosition>=20){
      var tranlateValues =
      "translate3d(" + xPosition + "px," + yPosition + "px,0px)";
      idea.style.transform = tranlateValues;
    }
    
  }
  Colocar(id:number) {
    document.removeEventListener("pointermove", this.getPositionMouse, false);
    var elemento = document.getElementById("n-"+id);
    var posicion = elemento.getBoundingClientRect();

    var principal = document.getElementById("principal");
    var posicionP = principal.getBoundingClientRect();
    this.Buscar_modificar(id,(posicion.x -posicionP.x-6),(posicion.y -posicionP.y-6)) 
  }

  salioDelPanel(){
    this.Colocar(parseInt(IdIdea))
  }

  getPosition(px:number,py:number) {
      return "translate3d(" + (px) + "px," + (py) + "px,0px)";
  }


  Buscar_modificar(id: number,px:number,py:number) {
    this.Find(this.mainIdeas[0], id, px, py);
  }

  Find(idea: any, id: number,px:number,py:number) {
    
    if (idea.id === id) {
      idea.px=px
      idea.py=py;
    } else {
      for (let i = 0; i < idea.sub.length; i++) {
        this.Find(idea.sub[i], id, px, py);
      }
    }
  }





}

