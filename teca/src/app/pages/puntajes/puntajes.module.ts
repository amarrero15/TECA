import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuntajesPageRoutingModule } from './puntajes-routing.module';

import { PuntajesPage } from './puntajes.page';
import { ScoresModule } from '../../scores/scores.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuntajesPageRoutingModule,
    ScoresModule
  ],
  declarations: [PuntajesPage]
})
export class PuntajesPageModule {}
