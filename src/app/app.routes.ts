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
        loadComponent:() => import('./whiteboard/whiteboard.component').then((c)=> c.WhiteBoardComponent)
      }
    ]
  },
  {
    path:'signup',
    loadComponent:() => import('./login/login.component').then((c)=> c.LoginComponent),
    pathMatch:'full'
  },
  {
    path:'',
    redirectTo:'signup',
    pathMatch:'full'
  }
];
