import { Injectable } from '@angular/core';
import { Indicators } from '../../models/indicators';
import { AngularFirestore } from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PanelService {

  constructor(private db: AngularFirestore) { }

  async getIndicators(id: string){
    return this.db.collection('indicators').doc(id).get().toPromise();
  }

  async getUserInformation(id: string){
    return this.db.collection('users').doc(id).get().toPromise();
  
}
  
}
