import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app'; 
import { AngularFireAuth} from '@angular/fire/auth';
import { Campaign } from '../models/campaign';
import { Course } from '../../courses/models/course';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  constructor(private db: AngularFirestore, private AFauth: AngularFireAuth) { }
  async getCampaignCourses(studentId: string){  
    return this.db.collection('campaign').doc(studentId).get().toPromise();
  }
  async getCampaignChapters(idCourse: string){
    return this.db.collection('courses').doc(idCourse).get().toPromise();
    
  }
}
