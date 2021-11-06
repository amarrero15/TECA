import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentFilterPipe } from './student-filter.pipe';



@NgModule({
  declarations: [StudentFilterPipe],
  exports:[StudentFilterPipe],
  imports: []
})
export class PipesModule { }
