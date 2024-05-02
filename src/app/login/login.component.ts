import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { faEnvelope, faLock, faCheckDouble, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatSnackBarModule,
    FontAwesomeModule,
  ],
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  confirmpassword = '';
  errorMsg_user = '';
  errorMsg_pwd = '';
  errorMsg_confirmPwd = '';
  errorMsg = '';
  reg_successMsg = '';
  checked: false;
  remail = '';
  rpassword = '';
  faEnvelope = faEnvelope;
  faLock = faLock;
  faCheckDouble = faCheckDouble;
  faUser = faUser;
  
  constructor(private router: Router, private sharedService: SharedService) {

  }

  ngOnInit(): void {}

  login() {
    // Reset error messages
    this.errorMsg_user = '';
    this.errorMsg_pwd = '';
    this.errorMsg = '';

    if (this.email.trim().length === 0) {
      this.errorMsg_user = '*Username is required!';
    } else if (this.password.trim().length === 0) {
      this.errorMsg_pwd = '*Password is required!';
    } else {
      this.errorMsg = '*Invalid Credentials!';
    }

    // Check if the user already exists in local storage
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = existingUsers.find(
      (user: any) =>
        user.email === this.email && user.password === this.password
    );
    if (existingUser) {
      this.sharedService.setUserEmail(this.email);
      this.router.navigate(['whiteboard']);
    }
  }

  register() {
    // Reset error messages
    this.errorMsg_user = '';
    this.errorMsg_pwd = '';
    this.errorMsg_confirmPwd = '';
    this.errorMsg = '';

    // Validate username
    if (this.remail.trim().length === 0) {
      this.errorMsg_user = '*Username is required!';
      return;
    }

    // Validate password
    if (this.rpassword.trim().length === 0) {
      this.errorMsg_pwd = '*Password is required!';
      return;
    }

    // Validate confirm password
    if (this.confirmpassword.trim().length === 0) {
      this.errorMsg_confirmPwd = '*Please confirm your password!';
      return;
    }

    if (this.rpassword !== this.confirmpassword) {
      this.errorMsg_confirmPwd = '*Passwords do not match!';
      return;
    }

    // Check if the user already exists in local storage
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = existingUsers.find(
      (user: any) => user.email === this.remail
    );
    if (existingUser) {
      this.errorMsg_user = '*Username already exists!';
      return;
    }

    // If everything is valid, store the new user in local storage
    existingUsers.push({ email: this.remail, password: this.rpassword });
    localStorage.setItem('users', JSON.stringify(existingUsers));
    this.reg_successMsg = "Account created successfully!";
    }
}
