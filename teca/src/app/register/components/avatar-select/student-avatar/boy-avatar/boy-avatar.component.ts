import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../../models/user';

@Component({
  selector: 'app-boy-avatar',
  templateUrl: './boy-avatar.component.html',
  styleUrls: ['./boy-avatar.component.scss'],
})
export class BoyAvatarComponent implements OnInit {
  @Input() comando: string;
  @Output() newBoyEvent = new EventEmitter();

  newUser = new User();
  
  constructor() { }

  ngOnInit() {}

  selectAvatar(event: any) {
    this.newUser.avatar = event.target.value;
    console.log('Este es mi avatar');
    console.log(this.newUser.avatar);
  }

  create() {
    this.newUser.type='Estudiante';
    this.newUser.password=localStorage.getItem('password');
    localStorage.removeItem('password');
    this.newBoyEvent.emit(this.newUser);
  }

}
