import { Component, OnInit } from '@angular/core';
import { Professor } from '../../../../models/professor';
import { SettingsService } from '../../../services/settings.service';
@Component({
  selector: 'app-professor-edit',
  templateUrl: './professor-edit.component.html',
  styleUrls: ['./professor-edit.component.scss'],
})
export class ProfessorEditComponent implements OnInit {
  professorInfo = new Professor();
  constructor(private settingsService: SettingsService) { }

  ngOnInit() {}
  updateProfile(){
    this.settingsService.updateProfessorProfile(this.professorInfo).then(res=>{
      //Acá va un alert oun popopver
    }).catch(err=>console.log(err));
  }

}
