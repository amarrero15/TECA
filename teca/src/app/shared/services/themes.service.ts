import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';
import { Chapter } from '../../courses/models/chapter';
import { Theme } from '../../courses/models/theme';
import { StudentInfo } from 'src/app/students/models/student-info';
@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  constructor(private AFauth: AngularFireAuth,private db: AngularFirestore) { }

  getChapter(chapterId: string){
    return this.db.collection('chapter').ref.where('chapterId', '==', chapterId).get().then(res=>{
      const data: any[] =[];
      res.forEach(doc =>{
        data.push(doc.data() as unknown as Theme);        
      });
      return data;
    })
  }
  getMyThemes(chapterId: string){
    return new Promise((resolve,rejected)=>{
      this.AFauth.currentUser.then(res=>{
        this.db.collection('themes').ref.where('chapterId', '==', chapterId).get().then(res=>{
          const data: any[] =[];
          res.forEach(doc =>{
            data.push(doc.data() as unknown as Theme);        
          });
          resolve(data);
        }).catch(err=>rejected(err));
      }).catch();
    });
  }
}
