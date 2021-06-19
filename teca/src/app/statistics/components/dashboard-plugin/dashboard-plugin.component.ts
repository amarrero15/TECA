import { Component, OnInit, ViewChild} from '@angular/core';
import { CircleProgressComponent, CircleProgressOptions} from 'ng-circle-progress';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard-plugin',
  templateUrl: './dashboard-plugin.component.html',
  styleUrls: ['./dashboard-plugin.component.scss'],
})
export class DashboardPluginComponent implements OnInit {
  @ViewChild('circleProgress') circleProgress: CircleProgressComponent;
  constructor(private route: Router) { }

  ngOnInit() {}
  goStatistics(){
    this.route.navigate(['estadisticas']);
    //this.navCtrl.navigateForward('/statistics');
  }

}
