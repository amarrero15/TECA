import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  visibleAnalogies=true;
  visibleComparative=false;
  visibleSynonyms=false;
  visibleMnemonics=false;
  constructor() { }

  ngOnInit() {}

}
