import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [BannerComponent],
  exports:[BannerComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class SharedModule { }
