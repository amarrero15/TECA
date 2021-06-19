import { Component, Input, OnInit } from '@angular/core';
import { Synonym } from 'src/app/activities/models/synonym';
import { Analogy } from '../../../models/analogy';
import { ComparativeChart } from '../../../models/comparative-chart';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  @Input() keywords: any;
  @Input() activity: any;
  @Input() activitySelected: string='';
  response: any;
  visibleAnalogies=true;
  visibleComparative=false;
  visibleSynonyms=false;
  visibleMnemonics=false;
  constructor() { }

  ngOnInit() {
    console.log('Este es el cuadro que selecciioné');
    console.log(this.activitySelected);
    this.displayActivity();
  }

  displayActivity(){
    switch(this.activitySelected){
      case 'analogías':{
        this.visibleAnalogies = true;
        this.visibleComparative=false;
        this.visibleSynonyms=false;
        this.visibleMnemonics=false;
        break;
      }
      case 'comparativo':{
        this.visibleComparative=true;
        this.visibleAnalogies = false;
        this.visibleSynonyms=false;
        this.visibleMnemonics=false;
        break;
      }
      case 'sinonimos':{
        this.visibleSynonyms=true;
        this.visibleComparative=false;
        this.visibleAnalogies = false;
        this.visibleMnemonics=false;
        break;
      }
    }
  }

  saveActivity(){
    console.log(this.response );
  }

  saveResponse(event: any){
    switch(this.activitySelected){
      case 'analogías':{
        this.response = event as Analogy;
       
        break;
      }
      case 'comparativo':{
        this.response = event as ComparativeChart;
     
        break;
      }
      case 'sinonimos':{
        this.response = event as Synonym;
     
        break;
      }
    }
  }



}
