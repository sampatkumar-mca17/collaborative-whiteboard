import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WHITEBOARD_ZOOM, WHITEBOARD_ZOOM_OPTIONS } from '../../white-board.constants';

@Component({
  selector: 'app-whiteboard-zoom-panel',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './whiteboard-zoom-panel.component.html',
  styleUrl: './whiteboard-zoom-panel.component.scss'
})
export class WhiteboardZoomPanelComponent {
  whiteBoardZoomOptions = WHITEBOARD_ZOOM_OPTIONS;
  @Input() zoom:number;
  @Output() onZoom:EventEmitter<string | number> = new EventEmitter();
  setZoom(zoomSelectValue:string | number){
    this.onZoom.emit(zoomSelectValue)
  }
}
