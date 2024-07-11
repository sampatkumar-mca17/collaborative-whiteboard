import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-whiteboard-new-document',
  standalone: true,
  imports: [],
  templateUrl: './whiteboard-new-document.component.html',
  styleUrl: '../../whiteboard.component.scss'
})
export class WhiteboardNewDocumentComponent {
  @Output() onNewDocument:EventEmitter<void> = new EventEmitter();
  newDocument(){
    this.onNewDocument.emit();
  }
}
