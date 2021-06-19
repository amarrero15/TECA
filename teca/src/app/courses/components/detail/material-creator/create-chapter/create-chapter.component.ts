import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { Chapter } from '../../../../models/chapter';
import { CourseService } from '../../../../services/course.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-chapter',
  templateUrl: './create-chapter.component.html',
  styleUrls: ['./create-chapter.component.scss'],
})
export class CreateChapterComponent implements OnInit {
  courseData: any;
  chapterData= new Chapter();
  constructor(private navParams: NavParams
    ,private popoverController: PopoverController
    ,private courseService: CourseService
    ,private route: Router) { }

  ngOnInit() {
    this.courseData=this.navParams.get('data');
  }
  setChapterColor(color:string){
    this.chapterData.color=color;
  }
  save(){
    this.courseService.createChapter(this.chapterData, this.courseData.courseId);
    this.popoverController.dismiss();
    //this.route.navigate(['/cursos/detalle']);
    this.route.onSameUrlNavigation;
  }
  cancel(){
    this.popoverController.dismiss();
  }
}
