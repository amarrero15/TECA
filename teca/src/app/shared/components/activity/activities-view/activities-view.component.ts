import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivitiesService } from 'src/app/shared/services/activities.service';
import { PopoverController } from '@ionic/angular';
import { ActivityEditorComponent } from '../../../../courses/components/detail/material-creator/activity-editor/activity-editor.component';
@Component({
  selector: 'app-activities-view',
  templateUrl: './activities-view.component.html',
  styleUrls: ['./activities-view.component.scss'],
})
export class ActivitiesViewComponent implements OnInit {
  @Output() themeViewEvent = new EventEmitter();
  //@Input() themeData:any;
  activities: any=[]
  constructor(private activitiesService: ActivitiesService, public popoverController: PopoverController) { 
  }

  ngOnInit() {
    this.getThemes();
  }
  getThemes(){
    this.activitiesService.getProfessorActivities().then(res=>{
      this.activities = res;
      console.log(res);
    }).catch();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ActivityEditorComponent,
      componentProps:{
        data:ev
      },
      cssClass: 'activity-popover-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
    
  }

  goTo(event: any){
    this.presentPopover(event)
    //this.themeViewEvent.emit(event);
  }
}
