import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-synonyms',
  templateUrl: './synonyms.component.html',
  styleUrls: ['./synonyms.component.scss'],
})
export class SynonymsComponent implements OnInit {
  value1='Sinónimos';
  value2='Antónimos';
  type=true;
  selectionType='';
  Items = [];
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

  addItem() {
    let newItem = this.type ? {id: this.Synonyms.length, word1:"", word2: ""} : {id: this.Antonyms.length, word1:"", word2: ""};
    this.type ? this.Synonyms.push(newItem) : this.Antonyms.push(newItem);
  }

  constructor() { 
    this.Items = this.Synonyms;
  }

  ngOnInit() {}

  selectType(event: any){
      this.type=!this.type;
      switch(this.type){
        case true:{
          //Acá va lo relacionado con el sinonimo
          this.selectionType='Sinónimos';
          this.Items = this.Synonyms;
          break;
        }
        case false:{
          //Acá lo relacionado con el antónimo;
          this.selectionType='Antónimos';
          this.Items = this.Antonyms;
          break;
        }
    }
  }

}

