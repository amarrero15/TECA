import { Component, OnInit } from '@angular/core';
import { PanelService } from '../../../services/panel.service';
import { Indicators } from '../../../../models/indicators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-work-report',
  templateUrl: './work-report.component.html',
  styleUrls: ['./work-report.component.scss'],
})
export class WorkReportComponent implements OnInit {
  professorIndicators= new Indicators();
  constructor(private panelService: PanelService, private route: Router) { }


  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.panelService.getIndicators(localStorage.getItem('token')).then(res=>{
      this.professorIndicators= res.data() as Indicators;
    });
  }

  goTo(destination: string){
    switch(destination){
      case 'actividades':{
        this.route.navigate(['/cursos/actividades'])
       
        break;
      }
      case 'cursos':{
        this.route.navigate(['/cursos'])
     
        break;
      }
      case 'estudiantes':{
        this.route.navigate(['/estudiantes'])
     
        break;
      }
    }
  }

}
