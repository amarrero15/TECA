import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsListComponent } from './components/statistics-list/statistics-list.component';
import { DashboardPluginComponent } from './components/dashboard-plugin/dashboard-plugin.component';
import { IonicModule } from '@ionic/angular';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [DashboardPluginComponent,StatisticsListComponent],
  exports:[DashboardPluginComponent,StatisticsListComponent],
  imports: [
    CommonModule
    ,IonicModule
    ,NgCircleProgressModule.forRoot({}) 
  ]
})
export class StatisticsModule { }
