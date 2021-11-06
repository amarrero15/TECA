import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AddStudentComponent } from '../crud/add-student/add-student.component';
@Component({
  selector: 'app-students-view',
  templateUrl: './students-view.component.html',
  styleUrls: ['./students-view.component.scss'],
})
export class StudentsViewComponent implements OnInit {
  public visibleGroups=false;
  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  selectView(event: any){
    switch(event.target.value){
      case 'Todos':{
        this.visibleGroups=false;
        break;
      }
      case 'Grupos':{
        this.visibleGroups=true;
        break;
      }
      default:{
        this.visibleGroups=false;
        break;
      }
    }
  }

  async presentPopover() {
    const popover = await this.popoverController.create({
      component: AddStudentComponent,
      cssClass: 'addStudent-popover-class',
      //event: any,
      translucent: true
    });
    return await popover.present();
  }

}
