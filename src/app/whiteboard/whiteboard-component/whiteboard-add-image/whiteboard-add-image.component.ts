import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-whiteboard-add-image',
  standalone: true,
  imports: [],
  templateUrl: './whiteboard-add-image.component.html',
  styleUrl: '../../whiteboard.component.scss'
})
export class WhiteboardAddImageComponent {
  @Output() onImageAdd: EventEmitter<EventTarget> = new EventEmitter();
  addImage(image:EventTarget){
    this.onImageAdd.emit(image)
  }
}
