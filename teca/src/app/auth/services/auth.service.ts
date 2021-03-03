import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth, private router: Router) { }

  login(email: string, password: string) {
    return new Promise((resolve, rejected) => {
      this.AFauth.signInWithEmailAndPassword(email, password).then(user => {
        // Guardar el uid para cargar la informacion
        localStorage.setItem('token', user.user.uid);
        console.log(localStorage.getItem('token'));
        //localStorage.setItem('userType', user.user.uid);
        //console.log(localStorage.getItem('token'));
        // this.usuarioService.getCurrentUser();
        resolve(user);
      }).catch(err => rejected(err));
    });
  } 
  
  logout() {
    this.AFauth.signOut().then(auth =>{
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('usuario');
      this.router.navigate(['/inicio']);
    });
  }
}
