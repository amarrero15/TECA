import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ComparativeChart } from '../../../models/comparative-chart';

@Component({
  selector: 'app-comparative',
  templateUrl: './comparative.component.html',
  styleUrls: ['./comparative.component.scss'],
})
export class ComparativeComponent implements OnInit {
  @Output() comparativeEvent = new EventEmitter();
  TypeSimilar = true;
  TypeDiferences = false;
  comparativeResponse = new ComparativeChart();
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
    this.TypeSimilar ? this.TypeDiferences = false : this.TypeSimilar = true;
  }

  onChange2(){
    this.TypeDiferences ? this.TypeSimilar = false : this.TypeDiferences = true;
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

  sendResponse(){
    this.comparativeEvent.emit(this.comparativeResponse);

  }

}
