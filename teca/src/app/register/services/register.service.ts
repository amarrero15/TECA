import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../../models/user';
import { Professor } from '../../models/professor';
import { Student } from '../../models/student';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private AFauth: AngularFireAuth, private db: AngularFirestore) { }

  register(user: User){
    return new Promise((resolve, rejected) => {
      this.db.collection('users').doc(user.idUser).set({
        uid:user.idUser,
        name:user.name,
        email: user.email,
        password: user.password,
        type: user.type,
        avatar: user.avatar
      }).then(res =>{
        resolve(res);
      }).catch(err => rejected(err));
    });
  }

  createProfessor(professor: Professor){
    return new Promise((resolve, rejected) => {
      this.db.collection('professors').doc(professor._id).set({
        id:professor._id,
        name:professor.nombre,
        gender: professor.sexo,
        date: professor.fechaNacimiento,
        speciality: professor.especialidad,
        email: professor.email,
      }).then(res =>{
        resolve(res);
      }).catch(err => rejected(err));
    });    
  }

  createStudent(student: Student){
    return new Promise((resolve, rejected) => {
      this.db.collection('students').doc(student._id).set({
        id:student._id,
        name:student.nombre,
        gender: student.sexo,
        date: student.fechaNacimiento,
        level: student.grado,
        highschool: student.institucion,
        email: student.email,
      }).then(res =>{
        resolve(res);
      }).catch(err => rejected(err));
    });    
  }

  registerProfessor(professor: Professor, user: User){
    return new Promise((resolve, rejected) =>{
      this.AFauth.createUserWithEmailAndPassword(user.email, user.password).then(res =>{
        professor._id= res.user.uid;
        user.idUser=res.user.uid;
        this.register(user);
        this.createProfessor(professor);
        resolve(res);
      }).catch(err => rejected(err));
      this.AFauth.signOut();
    });
  }

  registerStudent(student: Student, user: User){
    return new Promise((resolve, rejected) =>{
      this.AFauth.createUserWithEmailAndPassword(user.email, user.password).then(res =>{
        student._id= res.user.uid;
        user.idUser=res.user.uid;
        this.register(user);
        this.createStudent(student);
        resolve(res);
      }).catch(err => rejected(err));
      this.AFauth.signOut();
    });
  }
}
