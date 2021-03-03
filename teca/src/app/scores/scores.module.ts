import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreTableComponent } from './components/tables/score-table/score-table.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { ScoresComponent } from './components/scores/scores.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ScoresComponent,ScoreTableComponent],
  exports: [ScoresComponent,ScoreTableComponent],
  imports: [
    CommonModule
    ,IonicModule
    ,PipesModule
    ,SharedModule
  ]
})
export class ScoresModule { }
