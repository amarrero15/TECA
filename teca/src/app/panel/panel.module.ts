import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { ProfessorPanelComponent } from './components/control-panel/professor-panel/professor-panel.component';
import { StudentPanelComponent } from './components/control-panel/student-panel/student-panel.component';
import { StudentDashboardComponent } from './components/dashboard/student-dashboard/student-dashboard.component';
import { ProfessorDashboardComponent } from './components/dashboard/professor-dashboard/professor-dashboard.component';
import { WorkReportComponent } from './components/dashboard/work-report/work-report.component';
import { StatisticsModule } from '../statistics/statistics.module';



@NgModule({
  declarations: [
      ControlPanelComponent
    , ProfessorPanelComponent
    , StudentPanelComponent
    , StudentDashboardComponent
    , ProfessorDashboardComponent, WorkReportComponent],
  exports: [
      ControlPanelComponent
    , ProfessorPanelComponent
    , StudentPanelComponent
    , StudentDashboardComponent
    , ProfessorDashboardComponent, WorkReportComponent],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    StatisticsModule
  ]
})
export class PanelModule { }
