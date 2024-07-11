import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-whiteboard-undo',
  standalone: true,
  imports: [],
  templateUrl: './whiteboard-undo.component.html',
  styleUrl: '../../whiteboard.component.scss'
})
export class WhiteboardUndoComponent {
  @Output() onUndo:EventEmitter<void> = new EventEmitter();
  undo(){
    this.onUndo.emit()
  }
}
