import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../../models/user';
@Component({
  selector: 'app-man-avatar',
  templateUrl: './man-avatar.component.html',
  styleUrls: ['./man-avatar.component.scss'],
})
export class ManAvatarComponent implements OnInit {
  @Input() comando: string;
  @Output() newManEvent = new EventEmitter();
  
  newUser = new User();
  
  constructor() { }

  ngOnInit() {}

  selectAvatar(event: any) {
    this.newUser.avatar = event.target.value;
  }

  create() {    
    console.log('Esto es lo me llegó de password al local');
    this.newUser.type='Docente';
    this.newUser.password=localStorage.getItem('password');
    localStorage.removeItem('password');
    
    this.newManEvent.emit(this.newUser);
  }

}
