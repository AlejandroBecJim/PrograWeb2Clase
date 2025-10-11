import { Routes } from '@angular/router';
import { Signin } from './signin/signin';
import { Login } from './login/login';
import { Profile } from './profile/profile';
export const routes: Routes = [
    {
    path: '',
    component: Signin,
  },{
    path: 'login',
    component: Login
  },{

    path: 'profile',
    component: Profile
  }
];
