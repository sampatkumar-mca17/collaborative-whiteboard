import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToolsEnum } from 'ng-whiteboard';

@Component({
  selector: 'app-whiteboard-image-tool',
  standalone: true,
  imports: [],
  templateUrl: './whiteboard-image-tool.component.html',
  styleUrl: '../../whiteboard.component.scss'
})
export class WhiteboardImageToolComponent {
  @Input() selectedTool: ToolsEnum;
  @Output() onToolSelectionChanged:EventEmitter<ToolsEnum> = new EventEmitter();
  toolsEnum = ToolsEnum;
  toolSelectionChanged():void{
    this.onToolSelectionChanged.emit(this.toolsEnum.IMAGE)
  }
}
