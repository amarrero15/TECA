import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private db: AngularFirestore) { }

  async getProfileInformation(id: string){
      return this.db.collection('users').doc(id).get().toPromise();
    
  }

  async getStudentInformation(id: string){
    return this.db.collection('students').doc(id).get().toPromise();
  
}
}
