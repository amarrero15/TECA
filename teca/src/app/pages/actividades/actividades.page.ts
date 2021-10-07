import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activity } from 'src/app/courses/models/activity';
import { ActivityService } from '../../activities/services/activity.service';
@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})
export class ActividadesPage implements OnInit {
  public activityType:any;
  public data: any;
  public activityData: any;
  myActivity =new Activity()
  activitykeywords: any[]
  visibleCharts=true;
  visibleSchemes=false;
  visibleMaps=false;
  constructor(private activatedRoute: ActivatedRoute, private activityService: ActivityService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.data = JSON.parse(params['chartSelected']);
      this.activityData = JSON.parse(params['activity']);
      this.activitykeywords = JSON.parse(params['keywords']);
      this.activityType = JSON.parse(params['activityType']);
      console.log(this.activityData);
      this.setVisibleActivity();
      this.getActivityData(this.activityData);
    });

  }

  getActivityData(activityId: string){
    this.activityService.getActivity(activityId).then(res=>{
      this.myActivity = res.data() as Activity;
      console.log(this.myActivity);
    });
  }

  setVisibleActivity(){
    switch(this.activityType){
      case 'charts':{
        this.visibleCharts = true;
        this.visibleSchemes=false;
        this.visibleMaps=false;
        break;
      }
      case 'schemes':{
        this.visibleSchemes=true;
        this.visibleCharts = false;
        this.visibleMaps=false;
        break;
      }
      case 'maps':{
        this.visibleMaps=true;
        this.visibleCharts = false;
        this.visibleSchemes=false;
        break;
      }

    }
  }

}
