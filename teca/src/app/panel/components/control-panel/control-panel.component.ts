import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent implements OnInit {
  visibleProfessor=true;
  visibleStudent= false;
  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('userType')==='Docente'){
      this.visibleProfessor=true;
    }else{
      this.visibleStudent=true;
      this.visibleProfessor= !this.visibleStudent
    }
  }

}
