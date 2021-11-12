import { Component, OnInit } from '@angular/core';
import { KeyResponse } from '../../../interfaces/key-response';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss'],
})
export class KeyComponent implements OnInit {
  mainIdeas=[];
  keySize = "7vh";
  secondaryContainer = true;
  primaryKey = true;
  constructor() { }

  ngOnInit() {}

  addPrincipalIdea(){
    this.primaryKey = false;
    const newIdea: KeyResponse={
      id: this.mainIdeas.length+1,
      principalIdea: 'ideaPrincipal',
      secondaryIdeas: [],
    }
    this.keySize = this.mainIdeas.length >= 2 ? "100%" : 7 + 2 * 4.7 * this.mainIdeas.length + "vh";
    this.mainIdeas.push(newIdea);

  };

  addSecondaryIdea(i: number){

    console.log(i)
    this.mainIdeas[i].secondaryIdeas.push('idea secundaria');
    this.keySize = this.mainIdeas.length >= 2 ? "100%" : 7 + 2 * 4.7 * this.mainIdeas.length + "vh";
    this.secondaryContainer = false;

}

}