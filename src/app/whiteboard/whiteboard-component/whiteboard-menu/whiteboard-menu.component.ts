import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormatType } from 'ng-whiteboard';

@Component({
  selector: 'app-whiteboard-menu',
  standalone: true,
  imports: [],
  templateUrl: './whiteboard-menu.component.html',
  styleUrl: '../../whiteboard.component.scss'
})
export class WhiteboardMenuComponent {
  formatTypes = FormatType;
  @Output() onSaveAs:EventEmitter<FormatType>= new EventEmitter();
  saveAs(formatType:FormatType){
    this.onSaveAs.emit(formatType);
  }
}
