import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../../models/user';
import {Subscription} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private AFauth: AngularFireAuth, private db: AngularFirestore, private route: Router) { }

  createUser(user: User){
    this.db.collection('usuarios').doc(user.idUser).set({
      uid:user.idUser,
      email: user.email,
      password: user.password,
      tipo: user.type,
      avatar: user.avatar,
      nombre: user.name
    })
  }

  logout() {
    this.AFauth.signOut().then(auth =>{
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('usuario');
      this.route.navigate(['/inicio']);
    });
  }
}
