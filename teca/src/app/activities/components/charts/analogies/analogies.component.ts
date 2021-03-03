import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analogies',
  templateUrl: './analogies.component.html',
  styleUrls: ['./analogies.component.scss'],
})
export class AnalogiesComponent implements OnInit {
  Analogies = [
    {
      id: 0,
      text1:"Casa",
      text2:"Hogar",
    }
  ];
  addAnalogie() {
    let newItem = {id: this.Analogies.length, text1:"", text2: ""};
    this.Analogies.push(newItem);
    console.log(this.Analogies);
  }
  constructor() { }

  ngOnInit() {}

}
