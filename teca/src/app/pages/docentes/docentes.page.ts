import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.page.html',
  styleUrls: ['./docentes.page.scss'],
})
export class DocentesPage implements OnInit {
  public type:string='';
  public visible: boolean=true
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      //this.type = JSON.parse(params['type']) as string;
      //this.data = JSON.parse(params['data']);
    });
    if(this.type==='Docente'){
      this.visible=true;
    }else{
      this.visible=!this.visible;
    }
  }

}
