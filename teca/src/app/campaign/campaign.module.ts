import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignPanelComponent } from './components/campaign-panel/campaign-panel.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { SubtopicComponent } from './components/subtopic/subtopic.component';
import { CampaignComponent } from './components/campaign/campaign.component';



@NgModule({
  declarations: [CampaignComponent, CampaignPanelComponent, SubtopicComponent],
  exports:[CampaignComponent, CampaignPanelComponent, SubtopicComponent],
  imports: [
      CommonModule
    , IonicModule
    , SharedModule
  ]
})
export class CampaignModule { }
