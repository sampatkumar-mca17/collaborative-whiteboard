import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHandshake, faCopy, faSignOut, faSignIn, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FirebaseApp } from '@angular/fire/app';
import { Auth, User } from '@angular/fire/auth';
import { SharedService } from '../../services/shared.service';
import { LoginComponent } from "../../login/login.component";
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as Sentry from '@sentry/angular'

@Component({
  selector: 'app-whiteboard-wrapper',
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FontAwesomeModule,
    ToastrModule,
    LoginComponent,
    CommonModule,
    MatTooltipModule
],
  templateUrl: './whiteboard-wrapper.component.html',
  styleUrl: './whiteboard-wrapper.component.scss'
})
@Sentry.TraceClass({ name: "Whieboard Wrapper" })
export class WhiteboardWrapperComponent {
  protected faHandshake = faHandshake;
  protected faCopy = faCopy;
  protected faSignOut = faSignOut;
  protected faSignIn = faSignIn
  protected faChevronLeft = faChevronLeft
  protected enableGoToBoards:boolean;
  protected isLoggedIn:boolean;
  private toaster = inject(ToastrService)
  app: FirebaseApp;
  auth: Auth;
  userData: User;
  get collabURL():string{
    return location.href?.substring(0,20) + '...'
  }
  constructor(private sharedService: SharedService, private router:Router){
    Sentry.captureFeedback({ message: "I really like your App, thanks!" },
      {
        captureContext: {
          tags: { key: "value" },
        },
        attachments: [
          {
            filename: "screenshot.png",
            data: "base64-encoded-image",
          },
        ],
      },)
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.auth = this.sharedService.getAuth();
    this.sharedService.isLoggedIn().subscribe((userData:User) => {
      this.userData = userData;
      this.isLoggedIn = !!this.userData;
    })
    this.sharedService.hasWhiteBoardLoaded$().subscribe(loaded =>{
      this.enableGoToBoards = loaded;
    })
  }
  public logout():void{
    this.auth.signOut().then(_ => {
      this.toaster.success('Logged Out Successfully', 'Success');
    })
  }
  public copyCollabURL():void{
    const cb = navigator.clipboard;
    if (cb) {
      cb.writeText(new URL(location.href).host+'/whiteboard/board'+location.hash);
      this.toaster.success('URL copied.. Share it with your friend and enjoy collaboration!')
    }
  }
}
