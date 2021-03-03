import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibrePage } from './libre.page';

const routes: Routes = [
  {
    path: '',
    component: LibrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibrePageRoutingModule {}
