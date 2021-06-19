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
  constructor(private route: Router) { }

  ngOnInit() {}

  loadReading(theme: any){
    this.themeSelected = theme as Theme;
    this.visibleThemes=false;
    this.visibleReading=true;
  }

  goToActivity(event: any){
    //this.route.navigate(['/actividades'], );
    this.route.navigate(['/actividades'], {
      queryParams:{ 
      activity: JSON.stringify(this.themeSelected.activities.activityId),
      chartSelected: JSON.stringify(event),
      keywords:JSON.stringify(this.myKeywords)
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



}
