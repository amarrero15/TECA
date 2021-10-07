import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.scss'],
})
export class StudentDataComponent implements OnInit {
  @Input() email:string;
  @Input() date: string;
  @Input() level: string;
  constructor() { }

  ngOnInit() {}

}
