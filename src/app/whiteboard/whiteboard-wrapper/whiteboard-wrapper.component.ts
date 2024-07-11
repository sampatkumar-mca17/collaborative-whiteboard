import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHandshake, faCopy, faSignOut, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FirebaseApp } from '@angular/fire/app';
import { Auth, User } from '@angular/fire/auth';
import { SharedService } from '../../services/shared.service';
import { LoginComponent } from "../../login/login.component";

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
    LoginComponent
],
  templateUrl: './whiteboard-wrapper.component.html',
  styleUrl: './whiteboard-wrapper.component.scss'
})
export class WhiteboardWrapperComponent {
  protected faHandshake = faHandshake;
  protected faCopy = faCopy;
  protected faSignOut = faSignOut;
  protected faSignIn = faSignIn
  protected isLoggedIn:boolean;
  private toaster = inject(ToastrService)
  app: FirebaseApp;
  auth: Auth;
  userData: User;
  get collabURL():string{
    return location.href?.substring(0,20) + '...'
  }
  constructor(private sharedService: SharedService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.auth = this.sharedService.getAuth();
    this.sharedService.isLoggedIn().subscribe((userData:User) => {
      this.userData = userData;
      this.isLoggedIn = !!this.userData;
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
      cb.writeText(location.href);
      this.toaster.success('URL copied.. Share it with your friend and enjoy collaboration!')
    }
  }
}
