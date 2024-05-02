import { Routes } from '@angular/router';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path:'whiteboard',
    // loadComponent: () => import('./whiteboard/whiteboard.component').then((c)=> c.WhiteboardComponent),
    component:WhiteboardComponent
  },
  // {
  //   path:'',
  //   redirectTo:'whiteboard',
  //   pathMatch:'full'
  // }
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  }
];
