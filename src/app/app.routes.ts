import { Routes } from '@angular/router';
import { whiteboardDeactivateGuard } from './route-guards/whiteboard-deactivate.guard';


export const routes: Routes = [
  {
    path:'whiteboard',
    loadComponent: () => import('./whiteboard/whiteboard-wrapper/whiteboard-wrapper.component').then((c)=> c.WhiteboardWrapperComponent),
    children:[
      {
        path:'',
        loadComponent:() => import('./whiteboard/whiteboard-dashboard/whiteboard-dashboard.component').then((c)=> c.WhiteboardDashboardComponent)
      },
      {
        path:'board',
        loadComponent:() => import('./whiteboard/whiteboard-component/whiteboard.component').then((c)=> c.WhiteBoardComponent),
        canDeactivate:[whiteboardDeactivateGuard]
      },
      {
        path:'board/:id',
        loadComponent:() => import('./whiteboard/whiteboard-component/whiteboard.component').then((c)=> c.WhiteBoardComponent),
        canDeactivate:[whiteboardDeactivateGuard]

      }
    ]
  },
  {
    path:'',
    redirectTo:'whiteboard',
    pathMatch:'full'
  }
];
