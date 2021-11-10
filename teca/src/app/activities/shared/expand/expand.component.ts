import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expand',
  templateUrl: './expand.component.html',
  styleUrls: ['./expand.component.scss'],
})
export class ExpandComponent implements OnInit {

  isActivo = false;
  constructor() { }

  ngOnInit() {}
  
  Ampliar(){
    if(this.isActivo){
      var p = document.getElementById("principal");
      p.classList.remove("principalA");
      var r = document.getElementById("row-A");
      r.classList.remove("row-A");
      this.isActivo = false;
    }else{
      var p = document.getElementById("principal");
      p.className += " principalA"
      var r = document.getElementById("row-A");
      r.className += " row-A"
      this.isActivo = true;
    }
  }

}
