import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-whiteboard-save-to-db',
  standalone: true,
  imports: [],
  templateUrl: './whiteboard-save-to-db.component.html',
  styleUrl: '../../whiteboard.component.scss'
})
export class WhiteboardSaveToDbComponent {
  @Output() onSaveToDB:EventEmitter<void> = new EventEmitter();
  SaveToDB():void{
    this.onSaveToDB.emit();
  }
}
