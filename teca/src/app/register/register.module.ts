import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ProfessorFormComponent } from './components/register-form/professor-form/professor-form.component';
import { StudentFormComponent } from './components/register-form/student-form/student-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { FormsModule } from '@angular/forms';
import { AvatarSelectComponent } from './components/avatar-select/avatar-select.component';
import { BoyAvatarComponent } from './components/avatar-select/student-avatar/boy-avatar/boy-avatar.component';
import { GirlAvatarComponent } from './components/avatar-select/student-avatar/girl-avatar/girl-avatar.component';
import { ManAvatarComponent } from './components/avatar-select/professor-avatar/man-avatar/man-avatar.component';
import { ProfessorAvatarComponent } from './components/avatar-select/professor-avatar/professor-avatar.component';
import { StudentAvatarComponent } from './components/avatar-select/student-avatar/student-avatar.component';
import { WomanAvatarComponent } from './components/avatar-select/professor-avatar/woman-avatar/woman-avatar.component';



@NgModule({
  declarations: [
    ProfessorFormComponent
    , StudentFormComponent
    , RegisterFormComponent
    , AvatarSelectComponent
    , BoyAvatarComponent
    , GirlAvatarComponent
    , ManAvatarComponent
    , ProfessorAvatarComponent
    , StudentAvatarComponent
    , WomanAvatarComponent],
  exports: [
    ProfessorFormComponent
    , StudentFormComponent
    , RegisterFormComponent
    , AvatarSelectComponent
    , BoyAvatarComponent
    , GirlAvatarComponent
    , ManAvatarComponent
    , ProfessorAvatarComponent
    , StudentAvatarComponent
    , WomanAvatarComponent],
  imports: [
      CommonModule
    , IonicModule
    , FormsModule
  ]
})
export class RegisterModule { }
