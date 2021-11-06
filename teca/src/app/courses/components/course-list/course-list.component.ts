import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';
import { Student } from '../../../models/student';
import { StudentInfo } from '../../../students/models/student-info';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  cursos: any = [];
  cursos2: any =[];
  constructor(private route: Router, private courseService: CourseService) {
    this.courseService.getCourses().subscribe(cursosTeca =>{
      this.cursos = cursosTeca;
    })
  }

  ngOnInit() {
  }

  loadCourses(){

  }


  openCourseDetail(courseName: any){
    this.route.navigate(['/cursos/detalle'], { queryParams: { course: JSON.stringify(courseName) }})
  }

  activate(){
    this.route.navigate(['/cursos/activar']);
  }

  openDetailCurso(nombre: any){
    console.log(nombre);
    this.route.navigate(['/subjects/detail'], { queryParams: { curso: JSON.stringify(nombre) }});
    // this.navCtrl.navigateForward('/subjects/detail');
  }

}
