import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemasPageRoutingModule } from './temas-routing.module';

import { TemasPage } from './temas.page';
import { CampaignModule } from '../../../campaign/campaign.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemasPageRoutingModule,
    CampaignModule
  ],
  declarations: [TemasPage]
})
export class TemasPageModule {}
