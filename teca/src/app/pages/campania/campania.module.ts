import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampaniaPageRoutingModule } from './campania-routing.module';

import { CampaniaPage } from './campania.page';
import { CampaignModule } from '../../campaign/campaign.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampaniaPageRoutingModule,
    CampaignModule
  ],
  declarations: [CampaniaPage]
})
export class CampaniaPageModule {}
