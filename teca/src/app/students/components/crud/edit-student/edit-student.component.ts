import { Component, OnInit } from '@angular/core';
import { destroyView } from '@ionic/angular/directives/navigation/stack-utils';
import { StudentsService } from '../../../services/students.service';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss'],
})
export class EditStudentComponent implements OnInit {

  constructor(private studentService: StudentsService) { }

  ngOnInit() {}
  update(){
  }
  cancel(){
  }

}
