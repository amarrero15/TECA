import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivitiesListComponent } from './components/free-panel/activities-list/activities-list.component';
import { FreePanelComponent } from './components/free-panel/free-panel.component';
import { FreeModeComponent } from './components/free-mode/free-mode.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ActivitiesListComponent,FreePanelComponent,FreeModeComponent],
  exports: [ActivitiesListComponent,FreePanelComponent,FreeModeComponent],
  imports: [
      CommonModule
    , IonicModule
    , SharedModule
  ]
})
export class FreeModule { }
