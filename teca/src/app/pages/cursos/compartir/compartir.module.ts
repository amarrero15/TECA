import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompartirPageRoutingModule } from './compartir-routing.module';

import { CompartirPage } from './compartir.page';
import { CoursesModule } from '../../../courses/courses.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompartirPageRoutingModule,
    CoursesModule
  ],
  declarations: [CompartirPage]
})
export class CompartirPageModule {}
