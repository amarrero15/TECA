import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { CreateActivityComponent } from '../material-creator/create-activity/create-activity.component';
import { CreateChapterComponent } from '../material-creator/create-chapter/create-chapter.component';
import { CreateThemeComponent } from '../material-creator/create-theme/create-theme.component';
@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss'],
})
export class MaterialsComponent implements OnInit {
  courseData:any;
  constructor(private navParams: NavParams,public popoverController: PopoverController) { }

  ngOnInit() {
    this.courseData=this.navParams.get('courseData');
    console.log(this.courseData);
  }
  async open(value:any){
    switch (value){
      case 'chapter':{
        const popover = await this.popoverController.create({
          component: CreateChapterComponent,
          componentProps:{
            data:this.courseData
          },
          cssClass: 'chapter-popover-class',
          event: value,
          translucent: true
          
        });
        
        return await popover.present();
        
        
      }
      case 'theme':{
        const popover = await this.popoverController.create({
          component: CreateThemeComponent,
          componentProps:{
            data:this.courseData
          },
          cssClass: 'theme-popover-class',
          event: value,
          translucent: true
        });
        
        return await popover.present();
        
      }
      default:{
        const popover = await this.popoverController.create({
          component: CreateActivityComponent,
          componentProps:{
            data:this.courseData
          },
          cssClass: 'activity-popover-class',
          event: value,
          translucent: true
        });
        
        return await popover.present();
        
        
      } 
      
    }
    
  }


}
