// shared.service.ts
import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MiroBoardPickerConfig, StatusChecker } from '../whiteboard/whiteboard-component/model/whiteboard.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
declare var miroBoardsPicker:any;
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private isHandsetSubject:BehaviorSubject<boolean>= new BehaviorSubject(false);
  private miroBoardStatusChecker:StatusChecker<SafeUrl> ={
    fetching:false,
    success:false,
    data:null,
    fetchingComplete:false
  };
  private clientId:string;
  private microBoardStatusSubject:BehaviorSubject<StatusChecker<SafeUrl>>= new BehaviorSubject<StatusChecker<SafeUrl>>(this.miroBoardStatusChecker);
  constructor(private domSanitizer:DomSanitizer){
  }
  public setClientId(clientId:string):void{
    this.clientId = clientId;
  }
  public setMicroBoardStatus(status:StatusChecker<SafeUrl>):void{
    this.miroBoardStatusChecker = status;
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
  openBoardsPicker(boardContainer?:ElementRef<HTMLElement>){
    this.miroBoardStatusChecker.fetching = true;
    this.setMicroBoardStatus(this.miroBoardStatusChecker);
    miroBoardsPicker.open(this.getBoardsPickerConfiguration(boardContainer));
  }

  initializeStatusCheckerData():void{
    this.miroBoardStatusChecker = {
      fetching:false,
      success:false,
      data:null,
      fetchingComplete:false
    }
  }
  private getBoardsPickerConfiguration(boardContainer?:ElementRef<HTMLElement>):MiroBoardPickerConfig{
    this.miroBoardStatusChecker.fetching = true;
    this.miroBoardStatusChecker.fetchingComplete = false;
    this.setMicroBoardStatus(this.miroBoardStatusChecker);
    
    const config:MiroBoardPickerConfig =  {
       clientId: this.clientId,
       action: 'access-link',
       allowCreateAnonymousBoards: false,
       success: this.boardSelectionSuccess,
       error: this.boardSelectionError,
       cancel: this.boardSelectionCancel
     };
     
     (boardContainer && (config.iframeContainer = boardContainer.nativeElement))
     return config;
   }
   private boardSelectionSuccess = (result:any) => {
     this.miroBoardStatusChecker.data = this.bypassSecurity(result?.viewLink);
     this.miroBoardStatusChecker.success = true;
     this.miroBoardStatusChecker.fetching = false;
     this.miroBoardStatusChecker.fetchingComplete = true;
     this.setMicroBoardStatus(this.miroBoardStatusChecker);
   }
 
   private boardSelectionError =  (error:any) => {
    console.log(error);
    this.miroBoardStatusChecker = {...this.miroBoardStatusChecker,fetching:false, success:false, fetchingComplete:true, data:null}
    this.setMicroBoardStatus(this.miroBoardStatusChecker);
   }

   private boardSelectionCancel = () => {
    this.miroBoardStatusChecker = {...this.miroBoardStatusChecker,fetching:false, success:false, fetchingComplete:true}
    this.setMicroBoardStatus(this.miroBoardStatusChecker);

   }
 
  private bypassSecurity(url:string){
     return this.domSanitizer.bypassSecurityTrustResourceUrl(url)
   }
 

}
