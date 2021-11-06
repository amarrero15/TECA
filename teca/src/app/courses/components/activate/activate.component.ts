import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { Router } from '@angular/router';
@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss'],
})
export class ActivateComponent implements OnInit {
  newCourse = new Course()
  constructor(private route: Router) { }

  ngOnInit() {}

  setSubject(event: any){
    this.newCourse.subject = event.target.value;
    this.setCourseImage(event);
    console.log(this.newCourse.image);
    console.log(event.target.value);
  }

  setCourseImage(event: any){
    if(event.target.value === 'Estudios Sociales'){
      this.newCourse.image ="assets/svg/courses/SocialesB.svg";
    } else {
      this.newCourse.image ="assets/svg/courses/"+event.target.value+"B.svg";
    }
  }

  next(){
    //let temp = [...this.subjects, ...this.aditionalCiences];
    //this.cursosService.setActiveSubjects(temp);
    this.newCourse.professorId = localStorage.getItem('token');
    //this.cursosService.createCurso(this.nuevoCurso);
    //console.log(this.nuevoCurso.asignatura);
    this.route.navigate(['/cursos/compartir'], {queryParams:{ course: JSON.stringify(this.newCourse)}});
    //this.navCtrl.navigateForward(['/subjects/share'], { queryParams: { curso: JSON.stringify(this.nuevoCurso) }});
  }

}
