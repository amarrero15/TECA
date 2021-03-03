import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparative',
  templateUrl: './comparative.component.html',
  styleUrls: ['./comparative.component.scss'],
})
export class ComparativeComponent implements OnInit {
  TypeSimilar = true;
  TypeDiferences = false;
  Frames = 
  { 
    type:"Similitudes",
    title1:"",
    text1:"",
    title2:"",
    text2:"",
  };


  constructor() { }

  ngOnInit() {}

  onChange1(){
    this.TypeSimilar=true;
    this.TypeDiferences=false;
  }

  onChange2(){
    this.TypeSimilar=false;
    this.TypeDiferences=true;
  }

  changeType2Similar() {
    if(!this.TypeSimilar) {
      this.TypeSimilar=true;
      this.TypeDiferences=false;
      this.Frames.type="Similar";
    } else {
      this.TypeSimilar=false;
      this.TypeDiferences=true;
      this.Frames.type="Diferences";
    }
    console.log(this.Frames);
    console.log(this.TypeSimilar);
    console.log(this.TypeDiferences);
  }

}
