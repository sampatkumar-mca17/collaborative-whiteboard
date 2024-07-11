import { Routes } from '@angular/router';
import { whiteboardGuard } from './route-guards/whiteboard.guard';


export const routes: Routes = [
  {
    path:'whiteboard',
    loadComponent: () => import('./whiteboard/whiteboard-wrapper/whiteboard-wrapper.component').then((c)=> c.WhiteboardWrapperComponent),
    canActivate:[whiteboardGuard],
    children:[
      {
        path:'',
        loadComponent:() => import('./whiteboard/whiteboard-component/whiteboard.component').then((c)=> c.WhiteBoardComponent)
      }
    ]
  },
  {
    path:'',
    redirectTo:'whiteboard',
    pathMatch:'full'
  }
];
