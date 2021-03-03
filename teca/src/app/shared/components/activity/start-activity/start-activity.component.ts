import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-start-activity',
  templateUrl: './start-activity.component.html',
  styleUrls: ['./start-activity.component.scss'],
})
export class StartActivityComponent implements OnInit {
  @Input() keywordsActivity: any[];
  constructor() { }

  ngOnInit() {
    console.log('Estas son las palabras seleccionadas');
    console.log(this.keywordsActivity);
  }

}
