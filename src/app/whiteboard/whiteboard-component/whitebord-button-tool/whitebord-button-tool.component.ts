import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToolsEnum } from 'ng-whiteboard';

@Component({
  selector: 'app-whitebord-button-tool',
  standalone: true,
  imports: [],
  templateUrl: './whitebord-button-tool.component.html',
  styleUrl: '../../whiteboard.component.scss'
})
export class WhitebordButtonToolComponent {
  @Input() selectedTool: ToolsEnum;
  @Output() onToolSelectionChanged:EventEmitter<ToolsEnum> = new EventEmitter();
  toolsEnum = ToolsEnum;
  toolSelectionChanged():void{
    this.onToolSelectionChanged.emit(this.toolsEnum.SELECT)
  }
}
