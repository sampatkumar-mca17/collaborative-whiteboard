// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StatusChecker } from '../whiteboard/whiteboard-component/model/whiteboard.model';
import { SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private isHandsetSubject:BehaviorSubject<boolean>= new BehaviorSubject(false);
  private microBoardStatusSubject:BehaviorSubject<StatusChecker<SafeUrl>>= new BehaviorSubject<StatusChecker<SafeUrl>>({
    fetching:false,
    success:false,
    data:null,
    fetchingComplete:false
  });
  constructor(){
  }

  public setMicroBoardStatus(status:StatusChecker<SafeUrl>):void{
    this.microBoardStatusSubject.next(status);
  }

  public microBoardStatusChange():Observable<StatusChecker<SafeUrl>>{
    return this.microBoardStatusSubject.asObservable();
  }
  
  public setIsHandset(isHandset:boolean):void{
    this.isHandsetSubject.next(isHandset)
  }
  public getIsHandset():Observable<boolean>{
    return this.isHandsetSubject.asObservable();
  }
}
