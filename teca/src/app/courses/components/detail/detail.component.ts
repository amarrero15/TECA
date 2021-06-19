import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Course } from '../../models/course';
import { MaterialsComponent } from './materials/materials.component';
import { CourseService } from '../../services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() courseData: Course;
  variable : any;
  constructor(
    private route: Router
    ,public popoverController: PopoverController
    , private courseService: CourseService) { }

  ngOnInit() {
    console.log(this.courseData);
  }
  showDropDown(){
    this.presentPopover(1);
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: MaterialsComponent,
      componentProps:{
        courseData:this.courseData
      },
      cssClass: 'materials-popover-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  openDetail(chapterId: string){
    this.route.navigate(['/cursos/temas'], {queryParams:{ chapter: JSON.stringify(chapterId)}});
  }
}
