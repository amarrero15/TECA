import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../../services/students.service';
import { Student } from '../../../../models/student';
import { StudentInfo } from '../../../models/student-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent implements OnInit {
  studentsList: any=[];
  constructor(private studentsService: StudentsService, private route: Router) { }

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents(){
    this.studentsService.getStudents().subscribe(students=>{
      this.studentsList=students;
    });
  }
  addMyStudent(student : Student){
    this.studentsService.addStudent(student).then(res=>{}).catch(err=>console.log(err));
  }

}
