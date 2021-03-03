import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { Chapter } from 'src/app/courses/models/chapter';
import { CourseService } from '../../../../services/course.service';
@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.scss'],
})
export class CreateActivityComponent implements OnInit {
  courseData: any;
  chapterSelected = new Chapter();
  constructor(
      private navParams: NavParams
    , private popoverController: PopoverController
    , private courseService: CourseService) { }

  ngOnInit() {
    this.courseData=this.navParams.get('data');
  }

  searchThemes(event: any){
    this.courseService.getChapter(event.target.value).then(res=>{
      this.chapterSelected = res.data() as Chapter
    })
  }

}
