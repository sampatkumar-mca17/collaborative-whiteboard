import { MatToolbarModule } from '@angular/material/toolbar';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignIn, faChevronLeft, faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import { SharedService } from '../../services/shared.service';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SafeResourceUrl, DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MiroBoardPickerConfig, StatusChecker } from '../whiteboard-component/model/whiteboard.model';

declare var miroBoardsPicker:any;
@Component({
  selector: 'app-whiteboard-wrapper',
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule,
    CommonModule,
    MatButtonModule,
    FontAwesomeModule,
    MatTooltipModule,
],
  templateUrl: './whiteboard-wrapper.component.html',
  styleUrl: './whiteboard-wrapper.component.scss'
})
export class WhiteboardWrapperComponent {
  protected faSignIn = faSignIn
  protected faChevronLeft = faChevronLeft
  protected isHandset:boolean;
  protected faExpand = faExpandAlt
  protected microBoardUrl:SafeResourceUrl;
  microBoardStatusChecker: StatusChecker<SafeResourceUrl>;
  resizedIframe: any;
  get collabURL():string{
    return location.href?.substring(0,20) + '...'
  }
  @ViewChild('boardContainer',{static:false}) boardContainer:ElementRef<HTMLDivElement>;
  constructor(private sharedService: SharedService, private breakpointObserver:BreakpointObserver,private domSanitizer:DomSanitizer){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.observeBreakpoints();
  }
  ngAfterViewInit(): void {
    this.openBoardsPicker(this.boardContainer);
  }

  ngAfterViewChecked(): void {
   this.resizeBoardPickerIframe();
  }
  openBoardsPicker(boardContainer?:ElementRef<HTMLElement>){
    this.microBoardStatusChecker = this.initializeStatusCheckerData();
    this.microBoardStatusChecker.fetching = true;
    this.sharedService.setMicroBoardStatus(this.microBoardStatusChecker);
    miroBoardsPicker.open(this.getBoardsPickerConfiguration(boardContainer));
  }

  private observeBreakpoints(){
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe((result)=>{
      this.isHandset = result.matches;
    })
  }

  private resizeBoardPickerIframe(){
    if(!this.boardContainer?.nativeElement?.children?.length && this.resizedIframe){
      this.resizedIframe = false;
      return;
    }
    if(this.boardContainer && !this.resizedIframe){
      this.resizedIframe = true;
      const firstChild = this.boardContainer.nativeElement.children?.[0]
      if(firstChild?.tagName === 'IFRAME'){
        firstChild.setAttribute('width','100%')
        firstChild.setAttribute('height','100%')
      }
    }
  }

  private getBoardsPickerConfiguration(boardContainer?:ElementRef<HTMLElement>):MiroBoardPickerConfig{
    console.log(process?.env)
   const config:MiroBoardPickerConfig =  {
      clientId: process?.env?.['client_id']  ,
      action: 'access-link',
      allowCreateAnonymousBoards: false,
      success: this.boardSelectionSuccess,
      error: this.boardSelectionError
    };
    (boardContainer && (config.iframeContainer = boardContainer.nativeElement))
    return config;
  }
  private boardSelectionSuccess = (result:any) => {
    this.microBoardUrl = this.bypassSecurity(result?.viewLink);
    this.microBoardStatusChecker.data = this.microBoardUrl;
    this.microBoardStatusChecker.success = true;
    this.microBoardStatusChecker.fetching = false;
    this.microBoardStatusChecker.fetchingComplete = true;
    this.sharedService.setMicroBoardStatus(this.microBoardStatusChecker);
  }

  private boardSelectionError =  (error:any) => {
    this.microBoardStatusChecker.fetching = false;
    this.microBoardStatusChecker.success = false;
    this.microBoardStatusChecker.fetchingComplete = true;
    this.sharedService.setMicroBoardStatus(this.microBoardStatusChecker);
  }

 private bypassSecurity(url:string){
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url)
  }

  private initializeStatusCheckerData():StatusChecker<SafeUrl>{
    return {
      fetching:false,
      success:false,
      data:null,
      fetchingComplete:false
    }
  }
}
