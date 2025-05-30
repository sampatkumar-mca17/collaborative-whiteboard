import { MatToolbarModule } from '@angular/material/toolbar';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignIn, faChevronLeft, faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import { SharedService } from '../../services/shared.service';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SafeResourceUrl, DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MiroBoardPickerConfig, StatusChecker } from '../whiteboard-component/model/whiteboard.model';
import { GatewayService } from '../../services/gateway.service';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
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
    MatProgressSpinnerModule
],
  templateUrl: './whiteboard-wrapper.component.html',
  styleUrl: './whiteboard-wrapper.component.scss'
})
export class WhiteboardWrapperComponent {
  protected faSignIn = faSignIn
  protected faChevronLeft = faChevronLeft
  protected isHandset:boolean;
  protected faExpand = faExpandAlt
  microBoardStatusChecker: StatusChecker<SafeResourceUrl>;
  resizedIframe: any;
  loadingClientIdDetails:boolean;
  destroy$:Subject<void> = new Subject<void>();
  @ViewChild('boardContainer',{static:false}) boardContainer:ElementRef<HTMLDivElement>;
  miroBoardStatus$: Observable<StatusChecker<SafeUrl>>;
  constructor(private sharedService: SharedService, private gateway:GatewayService, private breakpointObserver:BreakpointObserver,private router:Router){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.observeBreakpoints();
    this.getClientId();
    this.miroBoardStatus$ = this.sharedService.microBoardStatusChange().pipe(takeUntil(this.destroy$))
   
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  openBoardsPicker(){
   this.router.navigate(['/whiteboard/whiteboard-picker']);
  }
  private getClientId(){
    this.loadingClientIdDetails = true;
    this.gateway.getCredentials().pipe(
      map((credentials)=>credentials),
      takeUntil(this.destroy$)
    ).subscribe((credentials)=>{
      this.sharedService.setClientId(credentials.clientId);
      this.loadingClientIdDetails = false;
      this.router.navigate(['/whiteboard/whiteboard-picker'])
    });
  }
  private observeBreakpoints(){
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe((result)=>{
      this.isHandset = result.matches;
    })
  }


}
