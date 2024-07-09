import { Component } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-get-username',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose
  ],
  templateUrl: './get-username.component.html',
  styleUrl: './get-username.component.scss'
})
export class GetUsernameComponent {
  constructor(public dialogRef: MatDialogRef<any>){}

}
