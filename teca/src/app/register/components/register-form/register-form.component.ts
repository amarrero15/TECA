import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Professor } from '../../../models/professor';
import { Student } from '../../../models/student';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {

  @Input() titulo: string;
  @Input() tipo1: string;
  @Input() tipo2: string;
  @Output() newAvatarEvent = new EventEmitter();
  public visibleProfessor = false;
  public visibleStudent = true;
  docentes: Professor[] = []; //Docente
  idUsuario: string;

  docentePrueba = new Professor();
  dataColected: boolean = false;

  constructor(
    private navCtrl: NavController,
    //private docenteService: DocenteService,
    //private estudianteService: EstudianteService,
    //private usuarioService: UsuarioService,
    //private alumnosService: AlumnosService,
    //private authenticationService: AuthenticationService,
    //private AFauth: AngularFireAuth,
  ) { }

  ngOnInit() {
  }

  selectForm(event: any) {
    this.newAvatarEvent.emit(event);
    this.setVisible();
  }



  setVisible() {
    if (this.visibleStudent === false) {
      this.visibleStudent = true;
      this.visibleProfessor = false;
    } else {
      this.visibleStudent = false;
      this.visibleProfessor = true;
    }
  }

  /**
   * Meto que si el registro del Docente/Estudiante y su usuario son exitoso pasan a la pagina de escogencia del avatar para su cuenta
   */
  gotoAvatar() {
    this.navCtrl.navigateForward('/avatar');
  }

  setDataColected(colected: boolean) {
    this.dataColected=colected; 
  }

}
