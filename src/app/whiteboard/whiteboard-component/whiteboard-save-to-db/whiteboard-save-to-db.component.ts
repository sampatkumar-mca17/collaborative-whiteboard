import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-whiteboard-save-to-db',
  standalone: true,
  imports: [
    CommonModule,
    MatTooltipModule
  ],
  templateUrl: './whiteboard-save-to-db.component.html',
  styleUrls: ['./whiteboard-save-to-db.component.scss','../../whiteboard.component.scss'],

})
export class WhiteboardSaveToDbComponent {
  @Input() disabled:boolean;
  @Output() onSaveToDB:EventEmitter<void> = new EventEmitter();
  SaveToDB():void{
    this.onSaveToDB.emit();
  }
}
