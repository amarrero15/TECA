import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-free-panel',
  templateUrl: './free-panel.component.html',
  styleUrls: ['./free-panel.component.scss'],
})
export class FreePanelComponent implements OnInit {
  @Output() freePanelEvent = new EventEmitter();
  description ='Si quieres practicar por tu cuenta, el modo libre es la sección perfecta porque te permite crear actividades y fichas de estudio.';
  constructor() { }

  ngOnInit() {}

  createActivity(){
    this.freePanelEvent.emit();
  }

}
