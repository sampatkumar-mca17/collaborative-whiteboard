import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToolsEnum } from 'ng-whiteboard';

@Component({
  selector: 'app-whiteboard-text-tool',
  standalone: true,
  imports: [],
  templateUrl: './whiteboard-text-tool.component.html',
  styleUrl: '../../whiteboard.component.scss'
})
export class WhiteboardTextToolComponent {
  @Input() selectedTool: ToolsEnum;
  @Output() onToolSelectionChanged:EventEmitter<ToolsEnum> = new EventEmitter();
  toolsEnum = ToolsEnum;
  toolSelectionChanged():void{
    this.onToolSelectionChanged.emit(this.toolsEnum.TEXT)
  }
}
