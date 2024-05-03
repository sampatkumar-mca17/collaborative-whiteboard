import { Component, OnInit, inject } from '@angular/core';
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
import { ToastrService } from 'ngx-toastr';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, Validators,ReactiveFormsModule} from '@angular/forms'
import {merge} from 'rxjs';

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
    ReactiveFormsModule,
  ],
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  checked: false;
  faEnvelope = faEnvelope;
  faLock = faLock;
  faCheckDouble = faCheckDouble;
  faUser = faUser;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  remail = new FormControl('', [Validators.required]);
  rpassword = new FormControl('', [Validators.required]);
  confirmpassword = new FormControl('', [Validators.required])
  errorMsg_email = '';
  errorMsg_pwd = '';
  errorMsg_reg_email = '';
  errorMsg_reg_pwd='';
  errorMsg_confirm_pwd='';

  constructor(private router: Router, private toaster: ToastrService, private sharedService: SharedService) 
  {
    // To display error messages on each field
    merge(
      this.email.statusChanges, 
      this.email.valueChanges,
      this.password.statusChanges,
      this.password.valueChanges,
      this.remail.statusChanges,
      this.remail.valueChanges,
      this.rpassword.statusChanges,
      this.rpassword.valueChanges,
      this.confirmpassword.statusChanges,
      this.confirmpassword.valueChanges
    )
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.updateEmailErrorMessage();
        this.updatePasswordErrorMessage();
        this.updateRegEmailErrorMessage();
        this.updateRegPasswordErrorMessage();
        this.updateConfirmPasswordErrorMessage();
      });
  }

  ngOnInit(): void {}

  updateEmailErrorMessage() {
    this.errorMsg_email = this.email.hasError('required')
      ? 'You must enter an email'
      : this.email.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  updatePasswordErrorMessage() {
    this.errorMsg_pwd = this.password.hasError('required')
      ? 'You must enter a password'
      : this.password.hasError('minlength')
      ? 'Password must be at least 8 characters long'
      : '';
  }

  updateRegEmailErrorMessage() {
    this.errorMsg_reg_email = this.remail.hasError('required')
      ? 'You must enter an email'
      : this.remail.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  updateRegPasswordErrorMessage() {
    this.errorMsg_reg_pwd = this.rpassword.hasError('required')
      ? 'You must enter a password'
      : this.rpassword.hasError('minlength')
      ? 'Password must be at least 8 characters long'
      : '';
  }

  updateConfirmPasswordErrorMessage() {
    this.errorMsg_confirm_pwd = this.confirmpassword.hasError('required')
      ? 'You must confirm your password'
      : this.rpassword.value !== this.confirmpassword.value
      ? 'Passwords do not match'
      : '';
  }

  login() {

    this.email.markAsTouched();
    this.password.markAsTouched();

    this.updateEmailErrorMessage();
    this.updatePasswordErrorMessage();

    if (this.email.invalid || this.password.invalid) {
      return;
    }

    // Reset error messages
    this.errorMsg_email = '';
    this.errorMsg_pwd = '';

    // Check if the user already exists in local storage
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = existingUsers.find(
      (user: any) =>
        user.email === this.email.value && user.password === this.password.value
    );
    if (existingUser) {
      this.sharedService.setUserEmail(this.email.value);
      this.toaster.success("Login Successful!","Success", {
        timeOut: 3000,
      })
      this.router.navigate(['whiteboard']);
    }

    else {
      this.toaster.error("*Invalid Credentials!","Error", {
        timeOut: 2000,
      })
    }
  }

  register() {

    this.remail.markAsTouched();
    this.rpassword.markAsTouched();
    this.confirmpassword.markAsTouched();

    // Trigger validation
    this.updateRegEmailErrorMessage();
    this.updateRegPasswordErrorMessage();
    this.updateConfirmPasswordErrorMessage();

    // Check if there are any validation errors
    if (this.remail.invalid || this.rpassword.invalid || this.confirmpassword.invalid) {
      return;
    }

    // Reset error messages
    this.errorMsg_reg_email = '';
    this.errorMsg_reg_pwd = '';
    this.errorMsg_confirm_pwd = '';

    // Check if the user already exists in local storage
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = existingUsers.find(
      (user: any) => user.email === this.remail.value
    );
    if (existingUser) {
      this.toaster.error ("Email already exists!", "Error", {
        timeOut: 2000,
      });
      return;
    }

    if (this.rpassword.value !== this.confirmpassword.value) {
      this.toaster.error ("Passwords do not match!", "Error", {
        timeOut: 2000,
      });
      return;
    }

    // If everything is valid, store the new user in local storage
    existingUsers.push({ email: this.remail.value, password: this.rpassword.value });
    localStorage.setItem('users', JSON.stringify(existingUsers));
    this.toaster.success("Account Created Successfully! Please Login!","Success", {
      timeOut: 3000,
    });
}

}
