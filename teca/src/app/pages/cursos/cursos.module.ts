import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursosPageRoutingModule } from './cursos-routing.module';

import { CursosPage } from './cursos.page';
import { CoursesModule } from '../../courses/courses.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursesModule,
    CursosPageRoutingModule
  ],
  declarations: [CursosPage]
})
export class CursosPageModule {}
