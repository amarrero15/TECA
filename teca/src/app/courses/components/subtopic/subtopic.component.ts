import { Component, OnInit, Input } from '@angular/core';
import { Theme } from '../../models/theme';
import { CourseService } from '../../services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subtopic',
  templateUrl: './subtopic.component.html',
  styleUrls: ['./subtopic.component.scss'],
})
export class SubtopicComponent implements OnInit {
  @Input() chapterId:any;
  selectedTheme = new Theme();
  visibleThemes=true;
  visibleReading=false;
  visibleActivity=false;
  constructor(private courseService: CourseService, private route: Router) { }

  ngOnInit() {}

  editReading(theme: any){
    this.visibleThemes=false;
    this.visibleReading=true;
    this.selectedTheme = theme as Theme;
     console.log(this.selectedTheme);
  }

  updateReading(theme: any){
    this.selectedTheme = theme as Theme;
    this.courseService.updateTheme(this.selectedTheme);
    this.visibleThemes=true;
    this.visibleReading=false;

  }

}
