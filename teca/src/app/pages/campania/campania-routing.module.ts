import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaniaPage } from './campania.page';

const routes: Routes = [
  {
    path: '',
    component: CampaniaPage
  },
  {
    path: 'temas',
    loadChildren: () => import('./temas/temas.module').then( m => m.TemasPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampaniaPageRoutingModule {}
