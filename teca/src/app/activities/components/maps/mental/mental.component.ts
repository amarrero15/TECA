import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { createGesture } from "@ionic/core/dist/esm";
import { MindresponseL_R } from "src/app/activities/interfaces/mindset-response";
import { PopUpPage } from "src/app/activities/shared/pop-up/pop-up.page";
import { DomSanitizer } from "@angular/platform-browser";

var IdIdea = "";

@Component({
  selector: "app-mental",
  templateUrl: "./mental.component.html",
  styleUrls: ["./mental.component.scss"],
})
export class MentalComponent implements OnInit {
  mainIdeas = [];
  IdeasOrd = [];
  Center = [];
  isOpen = true;
  idea: any;

  constructor(
    private modalCtrl: ModalController,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit() {}

  ActualizarIdeas(IdeasNew: any) {
    this.mainIdeas = IdeasNew;
    this.IdeasOrd = [];
    this.SepararIdeas(this.IdeasOrd, this.mainIdeas);
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
      px: 100,
      py: 125,
    };
    this.mainIdeas.push(newIdea);
    this.Center.push(newIdea);
  }

  SepararIdeas(IdeasOrd: any, mainIdeas: any) {
    if (mainIdeas[0].sub.length > 0) {
      this.getsecundaryIdeas(IdeasOrd, mainIdeas[0].sub, 0);
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

  cambiarPosicion(id: string) {
    IdIdea = id;
    const gesture = createGesture({
      el: document.getElementById("n-" + IdIdea),
      onMove: (detail) => {
        this.getPositionMouse(detail);
      },
      onEnd: () => {
        this.Colocar(parseInt(IdIdea));
      },
    });
    gesture.enable();
  }
  getPositionMouse(e) {
    var elemento = document.getElementById("svgId");
    var posicion = elemento.getBoundingClientRect();
    var xPosition = e.currentX - (posicion.x + 30);
    var yPosition = e.currentY - (posicion.y + 30);
    if (xPosition >= 2 && yPosition >= 2) {
      var idea = document.getElementById("n-" + IdIdea);
      var tranlateValues =
        "translate3d(" + xPosition + "px," + yPosition + "px,0px)";
      idea.style.transform = tranlateValues;
      // conector de idea
      try {
        var conector = document.getElementById("pn-" + IdIdea);
        var s = conector.getAttribute("d");
        var arr = s.split(" ");
        arr[6] = "" + (xPosition + 50);
        arr[7] = "" + (yPosition + 10);
        s = arr.join(" ");
        conector.setAttribute("d", s);
      } catch (error) {}

      // conectores de hijos cola
      try{
      var hijos = this.FindHijosId(parseInt(IdIdea),this.mainIdeas[0])
      hijos.forEach((i)=>{
        var conector2 = document.getElementById("pn-" +  i.id);
        var s = conector2.getAttribute("d");
        var arr = s.split(" ");
        arr[1] = "" + (xPosition + idea.getBoundingClientRect().width-5);
        arr[2] = "" + (yPosition +15);
        s = arr.join(" ");
        conector2.setAttribute("d", s);
      })}catch (error) {}




    }
  }
  Colocar(id: number) {
    var elemento = document.getElementById("n-" + id);
    var posicion = elemento.getBoundingClientRect();
    var principal = document.getElementById("svgId");
    var posicionP = principal.getBoundingClientRect();
    this.Buscar_modificar(
      id,
      posicion.x - posicionP.x - 6,
      posicion.y - posicionP.y - 6
    );
  }


  FindHijosId(id: number,idea:any){
    var sub
    if (idea.id === id) {
        return idea.sub
    } else {
      
      for (let i = 0; i < idea.sub.length; i++) {
        sub = this.FindHijosId(id,idea.sub[i]);
        if(sub)return sub
      }
    }
    
  }


  salioDelPanel() {
    this.Colocar(parseInt(IdIdea));
  }

  getPosition(px: number, py: number) {
    return "translate3d(" + px + "px," + py + "px,0px)";
  }

  Buscar_modificar(id: number, px: number, py: number) {
    this.Find(this.mainIdeas[0], id, px, py);
  }

  Find(idea: any, id: number, px: number, py: number) {
    if (idea.id === id) {
      idea.px = px;
      idea.py = py;
    } else {
      for (let i = 0; i < idea.sub.length; i++) {
        this.Find(idea.sub[i], id, px, py);
      }
    }
  }

  getConectors() {
    if (this.mainIdeas.length > 0 && this.mainIdeas[0].sub.length > 0) {
      return this.sanitizer.bypassSecurityTrustHtml(
        "<svg id='svgId' width='1440' height='796' xmlns='http://www.w3.org/2000/svg'>"+
          this.getPath(
            this.mainIdeas[0].id,
            this.mainIdeas[0].px,
            this.mainIdeas[0].py,
            this.mainIdeas[0]
          )+ 
          "</svg>"
      );
    }
  }


  getPath(Pid: number, Ppx: number, Ppy: number, idea: any) {
    var str = "";
    if (idea.id !== 1)
      str = this.fix_(Ppx, Ppy, idea.px, idea.py, Pid, idea.id);
    if (idea.sub.length > 0) {
      for (let i = 0; i < idea.sub.length; i++) {
        str += this.getPath(idea.id, idea.px, idea.py, idea.sub[i]);
      }
    }
    return str;
  }

  fix_(
    Ppx: number, //x1 padre
    Ppy: number, //y1 padre
    px: number, //x2 hijo
    py: number, //y2 hijo
    Pid: number, // id del padre
    id: number // id hijo
  ) {
    var x = 0;
    var y = 0;
    var x2 = 0;
    var y2 = py + 15;
    var p1 = 0;
    var p2 = 0;

    var elementoP = document
      .getElementById("n-" + Pid)
      .getElementsByClassName("Fmm")[0];
    var posicionP = elementoP.getBoundingClientRect();
    var widthP = posicionP.width;
    var heightP = posicionP.height;

    // calculos para X
    if (px > Ppx + widthP / 2) {
      x = Ppx + widthP / 2 + widthP / 4;
      x2 = px + 30;
      p1 = Ppx+ 100;
      p2 = Ppy+30;
    } else {
      x =  Ppx+10;
      x2 = px + 90;
      p1 = Ppx-20;
      p2 = Ppy+30
    }

    // calculos para y
    if (py < Ppy + heightP / 2) {
      y = Ppy + 10;
    } else {
      y = Ppy + heightP / 2;
    }

    return (
      "<svg id='svgId' width='1440' height='796' xmlns='http://www.w3.org/2000/svg'>"+
      "<path  id='pn-" +
      id +
      "' d='M " +
      x +
      " " +
      y +
      " S " +
      p1 +
      " " +
      p2 +
      " " +
      x2 +
      " " +
      y2 +
      "' stroke='#5570FF' stroke-width='2' fill='transparent'/>"
    );
  }
}
