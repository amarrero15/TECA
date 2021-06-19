import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Reading } from '../../models/reading';
import { TechniqueI } from '../../../courses/interfaces/technique-i';
import { ActivityI } from '../../../courses/interfaces/activity-i';

@Component({
  selector: 'app-reflective-reading',
  templateUrl: './reflective-reading.component.html',
  styleUrls: ['./reflective-reading.component.scss'],
})
export class ReflectiveReadingComponent implements OnInit {
  @Input() textReading:any;
  activateMarker = false;
  subject: string = "";
  theme: string = "";
  reading: string = "Enfermedades gástricas";
  indications: string = "Realice una lectura del siguiente texto. Subraye las palabras clave";
  keywords: any[]=[];
  textSelected = '';
  textComponent: string='Esta es una prueba del texto para la fase de lectura. Si todo funciona bien esta cosa trabajaría';
  @Output() readingEvent = new EventEmitter();
  @Output() keywordsEvent = new EventEmitter<any[]>();
  constructor() { }

  ngOnInit() {
    console.log(this.textReading.activities);
  }

  ngAfterViewInit(){
  }

  goToActivity(){
    this.readingEvent.emit('activity');
    console.log('Estas son las keywords');
    console.log(this.keywords);
    this.keywordsEvent.emit(this.keywords);
  }

  showSelectedText(){
    if(this.activateMarker){
      if (window.getSelection){
        if (this.keywords.length < 12){
          this.textSelected = window.getSelection().toString();
          this.keywords.push(this.textSelected);
          //this.textComponent = this.renderText();
          this.textReading.content=this.renderText();
          console.log(this.keywords);
        }
      }
    }

  }

  renderText(){
    if (!this.textSelected) {
      return this.textReading.content;
  }
    return this.textReading.content.replace(new RegExp(this.textSelected, "gi"), match => {
      return '<span class="highlightText">' + match + '</span>';
  });
  }

  useMarker() {
     this.activateMarker = !this.activateMarker;
  }

  undo(){
    this.keywords.pop();
  }
  redo(){}

}
