import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalogyComponent } from './components/charts/analogy/analogy.component';
import { ComparativeComponent } from './components/charts/comparative/comparative.component';
import { MnemonicComponent } from './components/charts/mnemonic/mnemonic.component';
import { SynonymComponent } from './components/charts/synonym/synonym.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AnalogyComponent
    ,ComparativeComponent
    ,MnemonicComponent
    ,SynonymComponent],
  exports:[
    AnalogyComponent
    ,ComparativeComponent
    ,MnemonicComponent
    ,SynonymComponent],
  imports: [
    CommonModule
    ,IonicModule
    ,FormsModule
  ]
})
export class ResponseViewerModule { }
