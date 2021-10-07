import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user';
@Component({
  selector: 'app-professor-dashboard',
  templateUrl: './professor-dashboard.component.html',
  styleUrls: ['./professor-dashboard.component.scss'],
})
export class ProfessorDashboardComponent implements OnInit {
  currentUser = new User()
  constructor() { }

  ngOnInit() {}

}
