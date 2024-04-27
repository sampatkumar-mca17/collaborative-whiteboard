import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl ,Validators } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogRef, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import {FontAwesomeModule, FaIconComponent} from '@fortawesome/angular-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { CommonModule } from '@angular/common';
import * as whiteBoardConstants from '../white-board.constants';
import { ExportOptions } from '../../models/whiteboard.model';



@Component({
  selector: 'app-export-diagram-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    CommonModule,
    MatTooltipModule,
    MatMenuModule,
    FontAwesomeModule,
    FaIconComponent,
    MatSelectModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose
  ],
  templateUrl: './export-diagram-dialog.component.html',
  styleUrl: './export-diagram-dialog.component.scss'
})
export class ExportDiagramDialogComponent {
  fg:FormGroup = new FormGroup({
    'name': new FormControl('',[ Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z0-9_]+$')]),
    'exportType': new FormControl(whiteBoardConstants.EXPORT_OPTIONS[0])
  })
  public nameHint1:string = whiteBoardConstants.NAME_HINT_1;
  public nameHint2:string = whiteBoardConstants.NAME_HINT_2;
  public faHelp = faQuestionCircle
  public faClose = faClose
  public exportOptions:string[] = whiteBoardConstants.EXPORT_OPTIONS
  public whiteBoardConstants = whiteBoardConstants
  // constructor
  constructor(public dialogRef:MatDialogRef<ExportDiagramDialogComponent>) {}

  // <------- getters ------->
  /**
   * checks if name has required error or pattern validation error,
   * based on the error type returns the different error message
   */
  get nameHasErrors():string{
    const nameControl = this.fg.get('name')
    if(nameControl?.touched && nameControl?.errors){
      if(nameControl?.hasError('required')){
        return whiteBoardConstants.NAME_REQUIRED_ERROR
      }
      else if(nameControl?.hasError('pattern')){
        return whiteBoardConstants.NAME_INVALID_ERROR
      }
    }
    return ''
  }
//  <------- getters end here ------->

  /**
   * sends the export options details to parent component
   */
  public export(){
    if(this.fg.valid){
      this.dialogRef.close(this.fg.value as ExportOptions)
    }

  }

}
