import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibrePageRoutingModule } from './libre-routing.module';

import { LibrePage } from './libre.page';
import { FreeModule } from '../../free/free.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibrePageRoutingModule,
    FreeModule
  ],
  declarations: [LibrePage]
})
export class LibrePageModule {}
