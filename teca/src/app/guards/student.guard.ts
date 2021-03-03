import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivate {
  userType: string = localStorage.getItem('userType');
  constructor(private AFauth: AngularFireAuth, private db: AngularFirestore, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.userType === 'Estudiante'){
        return true;
      }
      else{
        this.router.navigate(['/inicio'])
        return false;
      }
  }
  
}
