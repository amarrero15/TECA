import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { IonicModule } from '@ionic/angular';
import { ProfessorSideBarComponent } from './components/side-bar/professor-side-bar/professor-side-bar.component';
import { StudentSideBarComponent } from './components/side-bar/student-side-bar/student-side-bar.component';




@NgModule({
  declarations: [
      BannerComponent
    , ProfessorSideBarComponent
    , StudentSideBarComponent
    , ProfessorSideBarComponent],
  exports:[
      BannerComponent
    , ProfessorSideBarComponent
    , StudentSideBarComponent
    , ProfessorSideBarComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class SharedModule { }
