import { Component, Input, OnInit } from '@angular/core';
import { Theme } from 'src/app/courses/models/theme';
import { Chapter } from '../../../courses/models/chapter';
import { Router } from '@angular/router';
@Component({
  selector: 'app-subtopic',
  templateUrl: './subtopic.component.html',
  styleUrls: ['./subtopic.component.scss'],
})
export class SubtopicComponent implements OnInit {
  visibleThemes=true;
  visibleReading=false;
  visibleActivity=false;
  themeSelected= new Theme();
  myKeywords: any[];
  @Input() chapterId:any;
  activityType:string ='';
  constructor(private route: Router) { }

  ngOnInit() {}

  loadReading(theme: any){
    this.themeSelected = theme as Theme;
    this.visibleThemes=false;
    this.visibleReading=true;
  }

  goToActivity(event: any){
    //this.route.navigate(['/actividades'], );
    console.log(this.activityType);
    this.selectActivityType(event);
    this.route.navigate(['/actividades'], {
      queryParams:{ 
      activity: JSON.stringify(this.themeSelected.activities.activityId),
      chartSelected: JSON.stringify(event),
      keywords:JSON.stringify(this.myKeywords),
      activityType: JSON.stringify(this.activityType),
    }});
  }

  loadKeywords(keywords: any[]){
    this.visibleReading=false;
    this.visibleActivity=true;
    this.myKeywords=keywords;
    //this.newTheme.keyword=this.myKeywords;
    console.log('Estas son las keyword en el modelo');
    //this.goToActivity();
    //console.log(this.newTheme.keyword);
  }
  
  selectActivityType(event: any){
    switch(event){
      case 'analogías':{
        this.activityType="charts"
        break;
      }
      case 'comparativo':{
        this.activityType="charts"
        break;
      }
      case 'sinonimos':{
        this.activityType="charts"
        break;
      }
      case 'mnemotecnia':{
        this.activityType="charts"
        break;
      }
      case 'llaves':{
        this.activityType="schemes"
        break;
      }
      case 'sangrado':{
        this.activityType="schemes"
        break;
      }
      case 'arbol':{
        this.activityType="schemes"
        break;
      }
      case 'mental':{
        this.activityType="maps"
        break;
      }
      case 'conceptual':{
        this.activityType="schemes"
        break;
      }
    }
  }



}
