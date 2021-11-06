import { Component, OnInit } from '@angular/core';
import { Theme } from '../../../courses/models/theme';
import { Reading } from '../../../shared/models/reading';

@Component({
  selector: 'app-free-mode',
  templateUrl: './free-mode.component.html',
  styleUrls: ['./free-mode.component.scss'],
})
export class FreeModeComponent implements OnInit {
  visiblePanel= true;
  visibleTheme= false;
  visibleReading= false;
  visibleActivity= false;
  newTheme = new Reading();
  myKeywords: any[];
  constructor() { }

  ngOnInit() {}

  newActivity(event: any){
    this.visiblePanel=!this.visiblePanel;
    this.visibleTheme=!this.visibleTheme;
  }
  reading(event: any){
    //this.newTheme= event; 
    this.visibleTheme=!this.visibleTheme;
    this.visibleReading=!this.visibleReading;
  }
  start(event: any){
    this.visibleActivity=!this.visibleActivity;
    this.visibleReading=!this.visibleReading;
  }
  loadKeywords(keywords: any[]){
    this.myKeywords=keywords;
    this.newTheme.keyword=this.myKeywords;
    console.log('Estas son las keyword en el modelo');
    console.log(this.newTheme.keyword);
  }

}
