import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss'],
})
export class MyCoursesComponent implements OnInit {
  coursesList: any =[]
  constructor(private coursesService: CourseService) {
  }

  ngOnInit() {
    this.coursesService.getMyStudents().then(res=>{this.coursesList=res})
  }

}
