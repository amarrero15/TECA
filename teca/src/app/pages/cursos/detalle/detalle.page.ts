import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  public data: any;
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      //this.type = JSON.parse(params['type']) as string;
      this.data = JSON.parse(params['course']);
    });
  }

}
