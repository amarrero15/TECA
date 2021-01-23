import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Professor } from '../../../models/professor';
import { Student } from '../../../models/student';
@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {
  public type: string ='';
  public data: any;
  public professorData=  new Professor();
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.type = JSON.parse(params['type']) as string;
      this.data = JSON.parse(params['data']);
    });

  }

}
