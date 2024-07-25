import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrService } from 'ngx-toastr';
import { FirebaseApp } from '@angular/fire/app';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth'
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    MatButtonModule,
    FontAwesomeModule,
  ],
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() logout:boolean;
  faGoogle = faGoogle;
  app:FirebaseApp;
  auth:Auth;

  constructor(
    private toaster: ToastrService,
    private sharedService: SharedService
  ) {
  }

  ngOnInit(): void {
    this.auth = this.sharedService.getAuth();
  }
  loginWithGoogle(){
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      'login_hint': 'user@example.com'
    });
    signInWithPopup(this.auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        console.log(user);
        this.toaster.success('Login Successful', 'Success');
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error);
        this.toaster.error('Login Failed', 'Failed');
        // ...
      });
  }

  logoutApp(){
    this.auth.signOut().then(_ => {
      this.toaster.success('Logged Out Successfully', 'Success');
    })
  }

}
