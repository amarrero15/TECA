import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Professor } from '../../../../models/professor';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor-form',
  templateUrl: './professor-form.component.html',
  styleUrls: ['./professor-form.component.scss'],
})
export class ProfessorFormComponent implements OnInit {
  @Input() nombre: string;
  @Input() genero1: string;
  @Input() genero2: string;
  @Input() fecha: string;
  @Input() especialidad: string;
  @Input() email: string;
  @Input() password: string;
  @Input() botonRegistro: string;
  @Input() botonLogin: string;
  @Output() createNewDocenteEvent = new EventEmitter();
  
  newDocente = new Professor();

  constructor(private navCtrl: NavController, private route: Router) {

  }

  ngOnInit() {}

  setNombre(event: any) {
    this.newDocente.nombre = event.target.value;
  }

  setSexo(event: any) {
    this.newDocente.sexo = event.target.value;
  }

  setFechaNacimiento(event: any) {
    this.newDocente.fechaNacimiento = event.target.value;
  }

  setEspecialidad(event: any) {
    this.newDocente.especialidad = event.target.value;
  }

  setEmail(event: any) {
    this.newDocente.email = event.target.value;
    localStorage.setItem('email', event.target.value);
  }

  setPassword(event: any) {
    localStorage.setItem('password', event.target.value);
    console.log('Esto es lo que guardamos como password del docente');
    console.log(localStorage.getItem('password'));
  }

  /**
   * Llama a las funcion liga a ella en el componente padre para que se encargue del registro del docente y su respetivo usuario
   */
  create() {
    //delete this.newDocente._id;
    this.route.navigate(['/registro/avatar'], { queryParams: { data: JSON.stringify(this.newDocente), type: JSON.stringify('Docente') }});
    this.newDocente = new Professor();
  }

  /**
   * Lleva a la pantalla de inicio cuando se clickea el botón de iniciar sesión
   */
  goToInicio() {
    
    this.navCtrl.navigateForward(['/inicio']);
  }

}
