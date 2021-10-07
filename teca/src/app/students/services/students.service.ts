import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import { EmailValidator } from '@angular/forms';
import * as firebase from 'firebase/app'; 
import {map} from 'rxjs/operators';
import { StudentInfo } from '../models/student-info';
import { Student } from '../../models/student';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private AFauth: AngularFireAuth,private db: AngularFirestore) { }

  async addStudent(student: Student){   
    return new Promise((resolve, rejected)=>{
      this.AFauth.currentUser.then(res=>{
        const data = new StudentInfo();
        data.professorId=res.uid;
        data.studentId=student._id;
        data.name=student.name;
        data.level=student.level;
        data.email=student.email;
        data.performance=0;
        this.db.collection('studentList').doc(data.studentId).set({
          professorId:data.professorId,
          studentId:data.studentId,
          name:data.name,
          level:data.level,
          email:data.email,
          performance:data.performance
        }).then(res=>{
          this.db.collection('indicators').doc(data.professorId).update({
            students: firebase.default.firestore.FieldValue.increment(1)
          });
          resolve(res);
        }).catch(err=>rejected(err));
      })
    }); 
  }
  
  getMyStudents(professorId: string){
    return new Promise((resolve,rejected)=>{
      this.AFauth.currentUser.then(res=>{
        this.db.collection('studentList').ref.where('professorId', '==', professorId).get().then(res=>{
          const data: any[] =[];
          res.forEach(doc =>{
            data.push(doc.data() as unknown as StudentInfo);        
          });
          resolve(data);
        }).catch(err=>rejected(err));
      }).catch();
    });
  }

  getMyLevelStudents(professorId: string, level: string){
    return new Promise((resolve,rejected)=>{
      this.db.collection('studentList').ref.where('professorId', '==', professorId).where('level', '==', level ).get().then(res=>{
        const data: any[] =[];
        res.forEach(doc =>{
          data.push(doc.data() as StudentInfo);        
        });
        resolve(data);
      }).catch(err=>rejected(err));
    });
  }

  updateMyStudent(studentInfo: StudentInfo){
    return new Promise((resolve, rejected)=>{
      this.db.collection('studentList').doc(studentInfo.studentId).update({
        name: studentInfo.name,
        level: studentInfo.level,
        email:studentInfo.email,
      }).then(res=>{
        this.db.collection('students').doc(studentInfo.studentId).update({
          name: studentInfo.name,
          level:studentInfo.level,
          email:studentInfo.email
        });
        resolve(res);
      }).catch(err=>rejected(err));
    }); 
  }

  getStudents() {
    return this.db.collection('students').snapshotChanges().pipe(map(students=>{
      return students.map(student=>{
        const data= student.payload.doc.data() as Student;
        data._id =student.payload.doc.id
        return data;
      })
    }));
  }
}
