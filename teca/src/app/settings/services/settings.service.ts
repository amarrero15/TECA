import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app'; 
import { Professor } from '../../models/professor';
import { Student } from '../../models/student';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private db: AngularFirestore, private AFauth: AngularFireAuth) { }

  updateProfessorProfile(professor:Professor){
    return new Promise((resolve, rejected)=>{
      this.db.collection('professors').doc(professor._id).update({
        nombre: professor.nombre,
        fechaNacimiento: professor.fechaNacimiento,
        especialidad: professor.especialidad,
        email: professor.email,
      }).then(res=>{
        //Esta pendiente actualizar el password
        resolve(res);
      }).catch(err =>{rejected(err)});
    })
  }

  updateStudentProfile(student:Student){
    return new Promise((resolve, rejected)=>{
      this.db.collection('students').doc(student._id).update({
        nombre: student.name,
        fechaNacimiento: student.date,
        grado: student.level,
        email: student.email,
        institucion:student.highschool,
      }).then(res=>{
        //Esta pendiente actualizar el password
        resolve(res);
      }).catch(err =>{rejected(err)});
    })
  }

  updatePassword(newPassowrd: string){
    new Promise((resolve, rejected)=>{
      this.AFauth.currentUser.then(res=>{
        res.updatePassword(newPassowrd).then(a=>{
          resolve(a);
        }).catch(err=>rejected(err));
      }).catch(err=>rejected(err));
    })
  }
}
