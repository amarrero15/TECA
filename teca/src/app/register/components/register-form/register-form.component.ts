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

  /**
   * Registro del docente y su cuenta de usuario con las credenciales para hacer login en el sistema
   * @param newDocente Objeto Docente con los datos obtenidos del form que viene del componente professor-form
   */
  create(newDocente: Professor) {
    //const newUsuario = new Usuario();
   // newUsuario.email = localStorage.getItem('email'); 
    localStorage.removeItem('email');
    //newUsuario.password = localStorage.getItem('password'); 
    //localStorage.removeItem('password');
    //newUsuario.tipo = 'Docente';
    //newUsuario.avatar = 'docente1';
    //newUsuario.nombre = newDocente.nombre;
    /*
    this.AFauth.createUserWithEmailAndPassword(newUsuario.email, newUsuario.password).then(res => {
      const alumnos = new Alumnos();
      newUsuario.idUsuario = res.user.uid;
      newDocente._id = res.user.uid;
      alumnos.idProfesor = res.user.uid;
      this.usuarioService.createUser(newUsuario);
      this.docenteService.createDocente(newDocente);
      this.alumnosService.createListaAlumnos(alumnos);
      localStorage.setItem('sexo', newDocente.sexo);
      localStorage.setItem('tipo', 'Docente');
      localStorage.setItem('uid', newUsuario.idUsuario);
      console.log(localStorage.getItem('uid'));
      this.gotoAvatar();
    }).catch(err => console.log(err));
    */

  }

  /**
   * Registro del estudiante y su cuenta de usuario con las credenciales para hacer login en el sistema
   * @param newEstudiante Objeto Estudiante con los datos obtenidos del form que viene del componente student-form
   */
  createStudent(newEstudiante: Student) {
    //const newUsuario = new Usuario();
    /*
    newUsuario.email = localStorage.getItem('email'); localStorage.removeItem('email');
    newUsuario.password = localStorage.getItem('password'); localStorage.removeItem('password');
    newUsuario.tipo = 'Estudiante';
    newUsuario.avatar ="estudiante1";
    newUsuario.nombre = newEstudiante.nombre;
    this.AFauth.createUserWithEmailAndPassword(newUsuario.email, newUsuario.password).then(res => {
      newUsuario.idUsuario = res.user.uid;
      newEstudiante._id = res.user.uid;
      this.usuarioService.createUser(newUsuario);
      this.estudianteService.createEstudiante(newEstudiante);
      localStorage.setItem('sexo', newEstudiante.sexo);
      localStorage.setItem('tipo', 'Estudiante');
      localStorage.setItem('uid', newUsuario.idUsuario);
      this.gotoAvatar();
    }).catch(err => console.log(err));
    */

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
