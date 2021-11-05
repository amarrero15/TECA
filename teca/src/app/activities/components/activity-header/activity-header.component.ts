import { Component, Input, OnInit } from '@angular/core';
import * as htmlToImage from 'html-to-image';
import * as download from 'downloadjs';
@Component({
  selector: 'app-activity-header',
  templateUrl: './activity-header.component.html',
  styleUrls: ['./activity-header.component.scss'],
})
export class ActivityHeaderComponent implements OnInit {
  @Input() activityName: string ='Actividad';
  @Input() activityIndications: string ='This is a an example of activity indications';
  constructor() { }

  ngOnInit() {}

  saveActivity() {
    console.log("click")
    var node = document.getElementById("pngNode");
    htmlToImage.toPng(node)
    .then((dataUrl) => {
      download(dataUrl, 'guia.png');
    })
    .catch(err => {
      console.log(err);
    });
  }
}
