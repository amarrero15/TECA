import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-table',
  templateUrl: './score-table.component.html',
  styleUrls: ['./score-table.component.scss'],
})
export class ScoreTableComponent implements OnInit {
  searchtext='';
  scoresList=[
    {name:'Alfredo Marrero',espaniol:100,sociales:100,civica:100, biologia:95, quimica:97, fisica:100}
  , {name:'Nikki Lauda',espaniol:85,sociales:100,civica:100, biologia:95, quimica:100, fisica:100}
  , {name:'Valteri Bottas',espaniol:100,sociales:80,civica:90, biologia:95, quimica:97, fisica:100}
  , {name:'Charles Le Clerc',espaniol:100,sociales:100,civica:100, biologia:95, quimica:97, fisica:100}
  , {name:'Max Verstappen',espaniol:100,sociales:100,civica:100, biologia:100, quimica:100, fisica:100}
  , {name:'Fernando Alonso',espaniol:100,sociales:100,civica:100, biologia:100, quimica:100, fisica:100}];
  constructor() { }

  ngOnInit() {}
  search(event: any){
    this.searchtext=event.detail.value;
    console.log(event.target.value);
  }
}
