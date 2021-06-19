import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/activities/services/activity.service';
import { TechniqueI } from '../../../../courses/interfaces/technique-i';
import { Activity } from '../../../../courses/models/activity';

@Component({
  selector: 'app-start-activity',
  templateUrl: './start-activity.component.html',
  styleUrls: ['./start-activity.component.scss'],
})
export class StartActivityComponent implements OnInit {
  @Input() keywordsActivity: any[];
  @Input() activities: any;
  activitySelected = new Activity();
  chart: string ='';
  @Output() activityEvent = new EventEmitter();
  constructor(private route: Router, private activiyService: ActivityService) { }

  ngOnInit() {
    console.log('Estas son las palabras seleccionadas');
    console.log(this.keywordsActivity);
    console.log(this.activities);
  }

  loadChart(event: any){
    this.chart=event;
  }

  goToActivity(){
    this.activityEvent.emit(this.chart)
    //this.route.navigate(['/actividades'], {queryParams:{chartSelected: JSON.stringify(this.chart)}});
    console.log(this.chart);
  }

  getActivityData(){
  }

}
