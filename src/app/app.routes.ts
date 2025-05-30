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
        path:'whiteboard-picker',
        loadComponent:() => import('./whiteboard/whiteboard-picker/whiteboard-picker.component').then((c)=> c.WhiteboardPickerComponent)
      },
    ]
  },
  {
    path:'',
    redirectTo:'whiteboard',
    pathMatch:'full'
  }
];
