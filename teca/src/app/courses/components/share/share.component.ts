import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../../models/student';
import { CourseService } from '../../services/course.service';
import { CourseStudent } from '../../interfaces/course-student';
import { StudentInfo } from '../../../students/models/student-info';
import { Course } from '../../models/course';
@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit {
  @Input() courseData: any;
  students: any =[]
  selected=[];
  constructor(private courseService: CourseService,private route: Router) { 
  }
  ngOnInit() {
    this.loadStudents();
  }

  save(){
    this.courseService.createCourse(this.courseData).then(res=>{
      this.route.navigate(['/cursos']);
    }).catch(err=>console.log(err));
    
  }

  selectStudent(student: StudentInfo){
    const data :CourseStudent ={
      studentId:student.studentId,
      name:student.name
    };
    this.courseData.students.push(data);
    this.selected.push(data);
    console.log(this.courseData);
  }

  loadStudents(){
    this.courseService.getMyStudents().then(res=>{
      this.students = res;
    })
  }

}
