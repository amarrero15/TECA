import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mnemonics',
  templateUrl: './mnemonics.component.html',
  styleUrls: ['./mnemonics.component.scss'],
})
export class MnemonicsComponent implements OnInit {

  Mnemonics = [
    {
      id: 0,
      concept:'',
      knownword:'',
    },
    {
      id: 1,
      concept:'',
      knownword:'',
    },
    {
      id: 2,
      concept:'',
      knownword:'',
    },
    {
      id: 3,
      concept:'',
      knownword:'',
    },
    {
      id: 4,
      concept:'',
      knownword:'',
    }
  ];

  constructor() { }

  ngOnInit() {}

  delete(i:any){
    this.Mnemonics.splice(i,1);
    console.log(this.Mnemonics);
  }

}
