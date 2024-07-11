import { Component, EventEmitter, Output } from '@angular/core';
import { FormatType } from 'ng-whiteboard';

@Component({
  selector: 'app-whiteboard-save-as-menu',
  standalone: true,
  imports: [],
  templateUrl: './whiteboard-save-as-menu.component.html',
  styleUrl: './whiteboard-save-as-menu.component.scss'
})
export class WhiteboardSaveAsMenuComponent {
  formatTypes = FormatType;
  @Output() onSaveAs: EventEmitter<FormatType> = new EventEmitter();
  saveAs(type:FormatType){
    this.onSaveAs.emit(type)
  }
}
