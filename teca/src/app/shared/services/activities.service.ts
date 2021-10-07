import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import { Activity } from '../../courses/models/activity';
@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private AFauth: AngularFireAuth,private db: AngularFirestore) { }

  getMyActivities(themeId: string){
    return new Promise((resolve,rejected)=>{
      this.AFauth.currentUser.then(res=>{
        this.db.collection('activities').ref.where('themeId', '==', themeId).get().then(res=>{
          const data: any[] =[];
          res.forEach(doc =>{
            data.push(doc.data() as unknown as Activity);        
          });
          resolve(data);
        }).catch(err=>rejected(err));
      }).catch();
    });
  }

  getProfessorActivities(){
    return new Promise((resolve,rejected)=>{
      this.AFauth.currentUser.then(res=>{
        this.db.collection('activities').ref.where('professorId', '==', res.uid).get().then(res=>{
          const data: any[] =[];
          res.forEach(doc =>{
            data.push(doc.data() as unknown as Activity);        
          });
          resolve(data);
        }).catch(err=>rejected(err));
      }).catch();
    });
  }

}
