// shared.service.ts
import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from '@angular/fire/app';
import * as CONSTANTS from '../constants';
import { Auth, getAuth, User } from '@angular/fire/auth';
import { Firestore,initializeFirestore  } from '@angular/fire/firestore'
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private isLoggedInSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  private isWhiteBoardComponentLoadedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isNewBoardSubject: Subject<boolean> = new Subject<boolean>();
  constructor(private app: FirebaseApp, private auth: Auth, private fireStore:Firestore){
    this.auth.onAuthStateChanged((stateChanged)=>{
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
  public getFirestore():Firestore{
    return this.fireStore;
  }
  public setHasWhiteBoardLoaded(loaded:boolean):void{
    this.isWhiteBoardComponentLoadedSubject.next(loaded);
  }
  public hasWhiteBoardLoaded$():Observable<boolean>{
    return this.isWhiteBoardComponentLoadedSubject.asObservable();;
  }
  public setIsNewBoard(isNew:boolean):void{
    this.isNewBoardSubject.next(isNew);
  }
  public isNewBoard():Observable<boolean>{
    return this.isNewBoardSubject.asObservable();
  }
}
