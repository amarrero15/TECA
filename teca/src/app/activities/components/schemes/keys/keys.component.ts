import { Component, Input, OnInit } from '@angular/core';
import { KeyResponse } from '../../../interfaces/key-response';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.scss'],
})
export class KeysComponent implements OnInit {
  @Input() TituloDeDocumento:string ="Nuevo Esquema";
  MainIdeaToAdd:string ="";
  SecondaryIdeaToAdd:string ="";
  ShowMainInput:boolean=true;
  NewItem:any={ id: -1, text: '', secondary: ''};
  MainIdeas: any = [];
  constructor() { }

  ngOnInit() {}

  addMainIdea() {
    this.ShowMainInput=false;
  }
  addNewResponse(){
    let newResponse: KeyResponse ={
      id:0,
      principalIdea:'idea',
      secondaryIdeas:[]
    }
  }
  addSecondaryIdea() {
    /**En este punto buscamos agregar n cantidad de nodos en la llave */
    let NewItem= { id: this.MainIdeas.length, text: this.MainIdeaToAdd, secondary: this.SecondaryIdeaToAdd};
    this.MainIdeas.push(NewItem);
    this.SecondaryIdeaToAdd="";
    this.MainIdeaToAdd ="";
    this.ShowMainInput=true;  
  }
  showSecondary() {
    if(this.MainIdeas[this.MainIdeas.length-1].text != "" ){
      return true
    }
    return false;
  }
  showForInput() {
    if (this.MainIdeas.length<12 ) {
      return true;
    }
    return false; 
  }

}
