import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Activity } from 'src/app/courses/models/activity';
import { Analogy } from '../models/analogy';
@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private AFauth: AngularFireAuth,private db: AngularFirestore) { }

   async getActivity(activityId: string){
    return this.db.collection('activities').doc(activityId).get().toPromise();
  }
  createAnalogy(analogy: Analogy){
    analogy.analogyId=this.db.createId();
    this.db.collection('analogies').doc(analogy.analogyId).set({
      analogyId: analogy.analogyId,
      responses: analogy.responses
    })
  }
}
