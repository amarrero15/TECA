import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-professor-share',
  templateUrl: './professor-share.component.html',
  styleUrls: ['./professor-share.component.scss'],
})
export class ProfessorShareComponent implements OnInit {
  @Input() dataC: any;
  //students: any
  constructor() {}

  ngOnInit() {
    
  }

  
}
