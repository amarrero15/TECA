import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './components/charts/charts/charts.component';
import { AnalogiesComponent } from './components/charts/analogies/analogies.component';
import { ComparativeComponent } from './components/charts/comparative/comparative.component';
import { SynonymsComponent } from './components/charts/synonyms/synonyms.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MnemonicsComponent } from './components/charts/mnemonics/mnemonics.component';
import { ConceptualComponent } from './components/maps/conceptual/conceptual.component';
import { MentalComponent } from './components/maps/mental/mental.component';
import { SchemeComponent } from './components/schemes/scheme/scheme.component';
import { TreeComponent } from './components/schemes/tree/tree.component';
import { BleedingComponent } from './components/schemes/bleeding/bleeding.component';
import { MapsComponent } from './components/maps/maps/maps.component';



@NgModule({
  declarations: [
    AnalogiesComponent
    , BleedingComponent
    , ChartsComponent
    , ComparativeComponent
    , ConceptualComponent
    , MapsComponent
    , MentalComponent
    , MnemonicsComponent
    , SchemeComponent
    , SynonymsComponent
    , TreeComponent],
  exports: [
    AnalogiesComponent
    ,BleedingComponent
    , ChartsComponent
    , ComparativeComponent
    , ConceptualComponent
    , MapsComponent
    , MentalComponent
    , MnemonicsComponent
    , SchemeComponent
    , SynonymsComponent
    , TreeComponent],
  imports: [
      CommonModule
    , IonicModule
    , SharedModule
    , FormsModule
  ]
})
export class ActivitiesModule { }
