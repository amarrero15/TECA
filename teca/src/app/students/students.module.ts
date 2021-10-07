import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { GeneralTableComponent } from './components/tables/general-table/general-table.component';
import { GroupsTableComponent } from './components/tables/groups-table/groups-table.component';
import { MyStudentsComponent } from './components/my-students/my-students.component';
import { StudentsViewComponent } from './components/students-view/students-view.component';


import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AddStudentComponent } from './components/crud/add-student/add-student.component';
import { EditStudentComponent } from './components/crud/edit-student/edit-student.component';
import { PipesModule } from '../pipes/pipes.module';
@NgModule({
  declarations: [
      AddStudentComponent
    , EditStudentComponent  
    , GeneralTableComponent
    , GroupsTableComponent
    , MyStudentsComponent,
      StudentsViewComponent],
  exports: [
      AddStudentComponent
    , EditStudentComponent
    , GeneralTableComponent
    , GroupsTableComponent
    , MyStudentsComponent
    , StudentsViewComponent],
  imports: [
    CommonModule
    , IonicModule
    , SharedModule
    , FormsModule
    , MatTableModule
    , MatInputModule
    , MatButtonModule
    , PipesModule
  ]
})
export class StudentsModule { }
