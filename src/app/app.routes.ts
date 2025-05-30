import { Routes } from '@angular/router';
import { whiteboardActivateGuard } from './route-guards/whiteboard-activate.guard';


export const routes: Routes = [
  {
    path:'whiteboard',
    loadComponent: () => import('./whiteboard/whiteboard-wrapper/whiteboard-wrapper.component').then((c)=> c.WhiteboardWrapperComponent),
    children:[
      {
        path:'board',
        loadComponent:() => import('./whiteboard/whiteboard-component/whiteboard.component').then((c)=> c.WhiteBoardComponent),
        canActivate:[whiteboardActivateGuard]
      },
      {
        path:'',
        redirectTo:'board',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'whiteboard',
    pathMatch:'full'
  }
];
