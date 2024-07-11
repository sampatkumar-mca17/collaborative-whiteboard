import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WhiteboardWrapperComponent } from './whiteboard/whiteboard-wrapper/whiteboard-wrapper.component';
import { WhiteBoardComponent } from './whiteboard/whiteboard-component/whiteboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, WhiteboardWrapperComponent, WhiteBoardComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'collaborative-whiteboard';
}
