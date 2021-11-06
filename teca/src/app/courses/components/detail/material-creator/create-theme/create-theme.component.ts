import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { CourseService } from '../../../../services/course.service';
import { Theme } from '../../../../models/theme';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-theme',
  templateUrl: './create-theme.component.html',
  styleUrls: ['./create-theme.component.scss'],
})
export class CreateThemeComponent implements OnInit {
  courseData: any;
  ChapterData: any;
  themeData= new Theme();
  constructor(
      private navParams: NavParams
    , private popoverController: PopoverController
    , private courseService: CourseService
    , private route: Router) { }

  ngOnInit() {
    this.courseData=this.navParams.get('data');
  }

  save(){
    console.log(this.themeData);
    this.route.navigate(['/cursos/tema'], {queryParams:{ theme: JSON.stringify(this.themeData)}});
    this.popoverController.dismiss();
  }

}
