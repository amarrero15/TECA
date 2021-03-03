import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-theme-editor',
  templateUrl: './theme-editor.component.html',
  styleUrls: ['./theme-editor.component.scss'],
})
export class ThemeEditorComponent implements OnInit {
  @Output() themeEditorEvent = new EventEmitter();
  @Input() themeDataInfo: any;
  constructor() { }

  ngOnInit() {}

  save(){
    this.themeEditorEvent.emit(this.themeDataInfo);
  }

}
