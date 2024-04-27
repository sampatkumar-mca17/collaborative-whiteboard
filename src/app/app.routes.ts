import { Routes } from '@angular/router';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';

export const routes: Routes = [
  {
    path:'whiteboard',
    // loadComponent: () => import('./whiteboard/whiteboard.component').then((c)=> c.WhiteboardComponent),
    component:WhiteboardComponent
  },
  {
    path:'',
    redirectTo:'whiteboard',
    pathMatch:'full'
  }
];
