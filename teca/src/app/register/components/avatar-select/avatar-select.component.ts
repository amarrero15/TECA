import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { RegisterService } from '../../services/register.service';
@Component({
  selector: 'app-avatar-select',
  templateUrl: './avatar-select.component.html',
  styleUrls: ['./avatar-select.component.scss'],
})
export class AvatarSelectComponent implements OnInit {
  @Input() titulo: string;
  @Input() tipo1: string;
  @Input() tipo2: string;
  @Input() registerData: any;
  @Input() userType: string;
  
  idUsuario: string;
  public visibleProfessor = false;
  public visibleStudent = false;
  tipoUsuario: string;
  
  constructor(
    private route: Router
  ) { 
    this.visibleProfessor = this.tipoUsuario == 'Docente';
    this.visibleStudent = !this.visibleProfessor;

  }

  ngOnInit() {

    if(this.userType === 'Estudiante'){
      this.visibleStudent=true;
      this.visibleProfessor = !this.visibleStudent;
    }else{
      this.visibleProfessor=true;
      this.visibleStudent= !this.visibleProfessor;
    }
   }

  /**
   * Ingresar el avatar seleccionado por el usuario 
   * @param usuario Json con id y avatar del usuario
   */
  setAvatarUser(usuario: User) {

  }

  checked(){
    console.log(this.tipoUsuario);
    return true;
  }

  goToInicio() {
    this.route.navigate(['/inicio']);
    //this.navCtrl.navigateForward('/inicio');
  }

}
