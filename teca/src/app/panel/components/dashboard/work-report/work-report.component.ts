import { Component, OnInit } from '@angular/core';
import { PanelService } from '../../../services/panel.service';
import { Indicators } from '../../../../models/indicators';
@Component({
  selector: 'app-work-report',
  templateUrl: './work-report.component.html',
  styleUrls: ['./work-report.component.scss'],
})
export class WorkReportComponent implements OnInit {
  professorIndicators= new Indicators();
  constructor(private panelService: PanelService) { }


  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.panelService.getIndicators(localStorage.getItem('token')).then(res=>{
      this.professorIndicators= res.data() as Indicators;
    });
  }

}
