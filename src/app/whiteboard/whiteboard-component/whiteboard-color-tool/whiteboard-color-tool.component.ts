import { WHITEBOARD_OPTIONS } from './../../white-board.constants';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxColorsModule } from 'ngx-colors';

@Component({
  selector: 'app-whiteboard-color-tool',
  standalone: true,
  imports: [NgxColorsModule],
  templateUrl: './whiteboard-color-tool.component.html',
  styleUrl: '../../whiteboard.component.scss'
})
export class WhiteboardColorToolComponent {
  @Output() onColorChange:EventEmitter<{type:'fill' | 'strokeColor', event:Event}> = new EventEmitter();
  @Output() onSwapColors:EventEmitter<void> = new EventEmitter();
  options = WHITEBOARD_OPTIONS
  colorChange(type, $event){
    this.onColorChange.emit({type, event:$event});
  }
  swapColors(){
    this.onSwapColors.emit();
  }
}
