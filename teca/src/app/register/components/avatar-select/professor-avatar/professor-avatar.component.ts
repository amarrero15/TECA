import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../models/user';
import { Professor } from '../../../../models/professor';
import { RegisterService } from '../../../services/register.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-professor-avatar',
  templateUrl: './professor-avatar.component.html',
  styleUrls: ['./professor-avatar.component.scss'],
})
export class ProfessorAvatarComponent implements OnInit {
  @Input() tipo1: string;
  @Input() tipo2: string;
  @Input() comando: string;
  @Input() mensaje: string;

  @Input() professorInfo: Professor;
  @Output() newProfessorEvent = new EventEmitter();
  
  public visibleMasculino = false;
  public visibleFemenino = false;

  
  constructor(private registerService: RegisterService, private route: Router, private AFauth: AngularFireAuth) {}

  ngOnInit() {
    this.setVisibleAvatar();
  }

  setVisibleAvatar() {
    if (this.professorInfo.sexo === 'Femenino') {
      this.visibleFemenino = true;
      this.visibleMasculino = false;
    } else {
      this.visibleFemenino = false;
      this.visibleMasculino = true;
    }
  }
  
  create(user: User) {
    user.name= this.professorInfo.nombre;
    user.email= this.professorInfo.email;
    this.registerService.registerProfessor(this.professorInfo, user).then(res => {
    });
    this.registerService.logout();
    this.route.navigate(['/inicio']);
  }


}
