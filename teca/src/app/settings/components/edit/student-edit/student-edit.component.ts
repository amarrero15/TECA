import { Component, OnInit } from '@angular/core';
import { Student } from '../../../../models/student';
import { SettingsService } from '../../../services/settings.service';
@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss'],
})
export class StudentEditComponent implements OnInit {
  studentInfo = new Student()
  constructor(private settingsService:SettingsService) { }

  ngOnInit() {}

  updateProfile(){
    /*
    this.settingsService.updateStudentProfile(this.studentInfo).then(res=>{
      //Acá va un alert oun popopver
    }).catch(err=>console.log(err));
    */
  }
}
