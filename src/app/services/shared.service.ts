// shared.service.ts
import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import * as CONSTANTS from '../constants';
import { Auth, getAuth, User } from 'firebase/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private app:FirebaseApp = initializeApp(CONSTANTS.FIREBASE_CONFIG);
  private auth:Auth = getAuth(this.app);
  private isLoggedInSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  constructor(){
    this.auth.onAuthStateChanged((stateChanged)=>{
      console.log(stateChanged)
      this.isLoggedInSubject.next(stateChanged)
    },(error)=>{
      console.log(error)
    })
  }
  public getFirebaseApp():FirebaseApp{
    return this.app;
  }
  public getAuth():Auth{
    return this.auth;
  }
  public isLoggedIn():Observable<User>{
    return this.isLoggedInSubject.asObservable();
  }


}
