import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { StatusChecker } from './model/whiteboard.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SharedService } from '../../services/shared.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-whiteboard-component',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.scss'],
  standalone:true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule
],
  providers: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class WhiteBoardComponent {
  updatedBoarSize: boolean;
  constructor(private domSanitizer:DomSanitizer,private sharedService:SharedService){}
  miroBoardId:string;
  boardStatusChecker:Observable<StatusChecker<SafeResourceUrl>>;
  @ViewChild('boardFrame',{static:false}) boardFrame:ElementRef<HTMLIFrameElement>;
  ngOnInit(): void {
    this.boardStatusChecker = this.sharedService.microBoardStatusChange()
  }


  ngAfterViewChecked(){
    if(!this.boardFrame && this.updatedBoarSize){
      this.updatedBoarSize = false
      return;
    }
    if(this.boardFrame && !this.updatedBoarSize){
      this.updatedBoarSize = true
      this.boardFrame.nativeElement.width = String(window.innerWidth);
      this.boardFrame.nativeElement.height = `${window.innerHeight - 65}px`;
    }
  }

  bypassSecurity(url:string){
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url)
  }
}
