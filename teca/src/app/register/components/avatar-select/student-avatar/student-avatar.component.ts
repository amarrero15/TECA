import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../models/user';
import { Student } from '../../../../models/student';
import { RegisterService } from '../../../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-avatar',
  templateUrl: './student-avatar.component.html',
  styleUrls: ['./student-avatar.component.scss'],
})
export class StudentAvatarComponent implements OnInit {
  @Input() tipo1: string;
  @Input() tipo2: string;
  @Input() comando: string;
  @Input() mensaje: string;
  @Input() studentInfo: Student;
  @Output() newStudentEvent = new EventEmitter();

  public visibleMasculino = false;
  public visibleFemenino = true;
  
  constructor(private registerService: RegisterService, private route: Router) {}

  ngOnInit() {
    this.setVisibleAvatar();
    console.log('Este es el perfil del estudiante');
    console.log(this.studentInfo);
  }

  setVisibleAvatar() {
    if (this.studentInfo.sexo === 'Femenino') {
      this.visibleFemenino = true;
      this.visibleMasculino = false;
    } else {
      this.visibleFemenino = false;
      this.visibleMasculino = true;
    }
  }

  create(usuario: User) {
    usuario.name= this.studentInfo.nombre;
    usuario.email= this.studentInfo.email;
    this.registerService.registerStudent(this.studentInfo, usuario).then(res =>{
      this.route.navigate(['/inicio']);
    });
  }


}
