import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToolsEnum } from 'ng-whiteboard';

@Component({
  selector: 'app-whiteboard-brush-tool',
  standalone: true,
  imports: [],
  templateUrl: './whiteboard-brush-tool.component.html',
  styleUrl: '../../whiteboard.component.scss'
})
export class WhiteboardBrushToolComponent {
  @Input() selectedTool:ToolsEnum;
  @Output() onToolSelectionChanged:EventEmitter<ToolsEnum> = new EventEmitter();
  toolsEnum = ToolsEnum;
  toolSelectionChanged(){
    this.onToolSelectionChanged.emit(ToolsEnum.BRUSH);
  }
}
