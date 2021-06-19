import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-synonyms',
  templateUrl: './synonyms.component.html',
  styleUrls: ['./synonyms.component.scss'],
})
export class SynonymsComponent implements OnInit {
  value1='Sinónimos';
  value2='Antónimos';
  type=false;
  selectionType='';
  Synonyms = [
    {
      id:0,
      word1: "",
      word2: "",
    },
  ];
  Antonyms = [
    {
      id:0,
      word1: "",
      word2: "",
    }
  ];

  addSynonym() {
    let newItem = {id: this.Synonyms.length, word1:"", word2: ""};
    this.Synonyms.push(newItem);
    console.log(this.Synonyms);
  }

  addAntonym() {
    let newItem = {id: this.Antonyms.length, word1:"", word2: ""};
    this.Antonyms.push(newItem);
    console.log(this.Antonyms);
  }

  constructor() { }

  ngOnInit() {}

  selectType(event: any){
      this.type=!this.type;
      switch(this.type){
        case true:{
          //Acá va lo relacionado con el sinonimo
          this.selectionType='Sinónimos';
          break;
        }
        case false:{
          //Acá lo relacionado con el antónimo;
          this.selectionType='Antónimos';
          break;
        }
      console.log(this.type);
    }
  }

}

