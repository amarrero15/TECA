import { Component, OnInit } from '@angular/core';
import { TreeResponse } from 'src/app/activities/interfaces/tree-response';
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit {
  mainIdeas=[];
  constructor() { }

  ngOnInit() {}

  addPrincipalIdea(){
    const newIdea: TreeResponse={
      id: this.mainIdeas.length+1,
      principalIdea: 'ideaPrincipal',
      leafs: [],
    }
    this.mainIdeas.push(newIdea);
  };

  addSecondaryIdea(i: number){
    if (this.mainIdeas[i].leafs.length<2){
      this.mainIdeas[i].leafs.push('idea secundaria');
    }
  }
}
