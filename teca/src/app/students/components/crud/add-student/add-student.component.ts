import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../../services/students.service';
import { Student } from '../../../../models/student';
import { StudentInfo } from '../../../models/student-info';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent implements OnInit {
  studentsList: any=[];
  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents(){
    this.studentsService.getStudents().subscribe(students=>{
      this.studentsList=students;
    });
  }
  addMyStudent(student : Student){
    this.studentsService.addStudent(student).then(res=>{console.log('Funciona')}).catch(err=>console.log(err));
  }

}
