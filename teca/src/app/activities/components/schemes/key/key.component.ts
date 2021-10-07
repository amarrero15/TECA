import { Component, OnInit } from '@angular/core';
import { KeyResponse } from '../../../interfaces/key-response';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss'],
})
export class KeyComponent implements OnInit {
  mainIdeas=[];
  constructor() { }

  ngOnInit() {}

  addPrincipalIdea(){
    const newIdea: KeyResponse={
      id: this.mainIdeas.length+1,
      principalIdea: 'ideaPrincipal',
      secondaryIdeas: [],
    }
    this.mainIdeas.push(newIdea);
  };

  addSecondaryIdea(i: number){
    console.log(i)
    this.mainIdeas[i].secondaryIdeas.push('idea secundaria');
  }

}
