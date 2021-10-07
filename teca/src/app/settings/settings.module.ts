import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProfessorEditComponent } from './components/edit/professor-edit/professor-edit.component';
import { StudentEditComponent } from './components/edit/student-edit/student-edit.component';
import { FormsModule } from '@angular/forms';
import { ProfessorSettingsComponent } from './components/professor-settings/professor-settings.component';
import { StudentSettingsComponent } from './components/student-settings/student-settings.component';
import { SettingsViewComponent } from './components/settings-view/settings-view.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { GeneralOptionsComponent } from './components/options/general-options/general-options.component';
import { ProfessorOptionsComponent } from './components/options/professor-options/professor-options.component';
import { StudentOptionsComponent } from './components/options/student-options/student-options.component';



@NgModule({
  declarations: [
      GeneralOptionsComponent
    , ProfessorEditComponent
    , ProfessorOptionsComponent
    , ProfessorSettingsComponent
    , ProfileSettingsComponent
    , SettingsViewComponent
    , StudentEditComponent
    , StudentOptionsComponent
    , StudentSettingsComponent],
    exports: [
      GeneralOptionsComponent
    , ProfessorEditComponent
    , ProfessorOptionsComponent
    , ProfessorSettingsComponent
    , ProfileSettingsComponent
    , SettingsViewComponent
    , StudentEditComponent
    , StudentOptionsComponent
    , StudentSettingsComponent],
  imports: [
      CommonModule
    , IonicModule
    , FormsModule
    , SharedModule
  ]
})
export class SettingsModule { }
