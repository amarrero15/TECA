import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor-data',
  templateUrl: './professor-data.component.html',
  styleUrls: ['./professor-data.component.scss'],
})
export class ProfessorDataComponent implements OnInit {
  @Input() email:string;
  @Input() speciality: string;
  constructor() { }

  ngOnInit() {}

}
