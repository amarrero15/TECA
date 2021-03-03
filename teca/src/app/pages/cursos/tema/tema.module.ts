import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemaPageRoutingModule } from './tema-routing.module';

import { TemaPage } from './tema.page';
import { CoursesModule } from '../../../courses/courses.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemaPageRoutingModule,
    CoursesModule
  ],
  declarations: [TemaPage]
})
export class TemaPageModule {}
