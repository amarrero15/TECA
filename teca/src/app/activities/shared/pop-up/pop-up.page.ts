import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.page.html',
  styleUrls: ['./pop-up.page.scss'],
})
export class PopUpPage {
  inputValue: ""
  constructor(private modal:ModalController, public navar:NavController) { }
  
  closePopup(){
  this.inputValue = ""
  this.modal.dismiss()
  }
  guardar(val:any){
    this.inputValue =  val
  }
  guardarCerrar(){
    this.modal.dismiss(this.inputValue)
  }
}
