import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-whiteboard-redo',
  standalone: true,
  imports: [],
  templateUrl: './whiteboard-redo.component.html',
  styleUrl: '../../whiteboard.component.scss'
})
export class WhiteboardRedoComponent {
  @Output() onRedo:EventEmitter<void> = new EventEmitter();
  redo(){
    this.onRedo.emit();
  }
}
