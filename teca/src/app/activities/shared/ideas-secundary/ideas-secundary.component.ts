import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { proxyOutputs } from "@ionic/angular/directives/proxies-utils";
import { MindresponseL_R } from "../../interfaces/mindset-response";
import { PopUpPage } from "../pop-up/pop-up.page";

@Component({
  selector: "app-ideas-secundary",
  templateUrl: "./ideas-secundary.component.html",
  styleUrls: ["./ideas-secundary.component.scss"],
})
export class IdeasSecundaryComponent implements OnInit {
  @Input() lado: String;
  @Input() mainIdeas: any;
  @Input() ideasXMostrar: any;
  @Output() IdeasAll = new EventEmitter<any>();

  ideas: any;
  Mostrar = [];

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.ideas = this.mainIdeas;
    this.Mostrar.push(this.ideasXMostrar);
  }

  sentNewIdeas(): void {
    this.IdeasAll.emit(this.ideas);
  }

  async abrirModal(is: any) {
    if (is) {
      const modal = await this.modalCtrl.create({
        component: PopUpPage,
        keyboardClose: true,
        cssClass: "modalCss",
        componentProps: {},
      });
      modal.onDidDismiss().then((data) => {
        var valor = data["data"];
        if (valor) {
          this.ideas[0].principalIdea = valor;
          this.sentNewIdeas();
        }
      });
      await modal.present();
    }
  }

  addSecondaryIdea(padreId: number, px: number, py: number,hijos:number) {
    var pxr, pyr;
    switch (this.lado) {
      case "C":
        pxr = px + 165;
        pyr = py +(hijos*100);
        break;
      case "R":
        pxr = px + 200;
        pyr = py +(hijos*65);
        break;
    }

    const newIdeaS: MindresponseL_R = {
      id: this.ideas[0].cant + 1,
      principalIdea: "",
      sub: [],
      cant: 0,
      idPadre: padreId,
      px: pxr,
      py: pyr,
    };

    // aqui lo Busco y lo agrego
    this.Buscar_modificar(padreId, newIdeaS);
    this.ideas[0].cant++;
    this.sentNewIdeas();
  }

  Buscar_modificar(id: number, newIdeaS: any) {
    this.Find(this.ideas[0], id, newIdeaS);
  }

  Find(ideas: any, id: number, newIdeaS: any) {
    
    if (ideas.id === id) {
      ideas.sub.push(newIdeaS);
    } else {
      for (let i = 0; i < ideas.sub.length; i++) {
        this.Find(ideas.sub[i], id, newIdeaS);
      }
    }
  }

}
