import { Component, OnInit } from '@angular/core';
import { KeyResponse } from '../../../interfaces/key-response';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss'],
})
export class KeyComponent implements OnInit {
  mainIdeas=[];
  size=28;
  secondaryContainer = true;
  constructor() { }

  ngOnInit() {}

  addPrincipalIdea(){
    const newIdea: KeyResponse={
      id: this.mainIdeas.length+1,
      principalIdea: 'ideaPrincipal',
      secondaryIdeas: [],
    }
    this.size = this.mainIdeas.length >= 5 ? this.size + 7 : this.size;
    this.mainIdeas.push(newIdea);

  };

  addSecondaryIdea(i: number){

    console.log(i)
    this.mainIdeas[i].secondaryIdeas.push('idea secundaria');
    this.size = this.mainIdeas.length >= 5 ? this.size + 3 : this.size;
    this.secondaryContainer = false;

}

}
