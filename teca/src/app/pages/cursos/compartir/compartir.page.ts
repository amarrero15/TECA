import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-compartir',
  templateUrl: './compartir.page.html',
  styleUrls: ['./compartir.page.scss'],
})
export class CompartirPage implements OnInit {
  public data: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      //this.type = JSON.parse(params['type']) as string;
      this.data = JSON.parse(params['course']);
    });
  }

}
