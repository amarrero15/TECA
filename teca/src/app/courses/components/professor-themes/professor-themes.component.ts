import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { PopoverController } from '@ionic/angular';
import { Theme } from '../../models/theme';
import { Chapter } from '../../models/chapter';
import { CreateThemeComponent } from '../detail/material-creator/create-theme/create-theme.component';
@Component({
  selector: 'app-professor-themes',
  templateUrl: './professor-themes.component.html',
  styleUrls: ['./professor-themes.component.scss'],
})
export class ProfessorThemesComponent implements OnInit {
  public visibleEditor =true
  public visibleThemes = false;
  @Input() themeData: Theme;
  values: any;
  constructor(
    private courseService: CourseService
    , public popoverController: PopoverController) {
   }

  ngOnInit() {
    
  }


  createTheme(event: any){
    this.themeData = event;
    this.courseService.createTheme(this.themeData);
    this.visibleEditor=false;
    this.visibleThemes=!this.visibleEditor;
  }

}
