import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-header',
  templateUrl: './activity-header.component.html',
  styleUrls: ['./activity-header.component.scss'],
})
export class ActivityHeaderComponent implements OnInit {
  @Input() activityName: string ='Activity';
  @Input() activityIndications: string ='This is a an example of activity indications';
  constructor() { }

  ngOnInit() {}

}
