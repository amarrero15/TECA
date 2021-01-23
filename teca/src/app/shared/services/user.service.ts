import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../../models/user';
import {Subscription} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore) { }

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
}
