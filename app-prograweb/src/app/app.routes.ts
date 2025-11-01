import { Routes } from '@angular/router';
import { Signin } from './signin/signin';
import { Login } from './login/login';
import { Profile } from './profile/profile';
import { Home } from './home/home';
import { Products } from './products/products';
export const routes: Routes = [
    {
    path: '',
    component: Home,
  },{
    path: 'login',
    component: Login
  },{

    path: 'profile',
    component: Profile
  },
  {
    path: 'signin',
    component: Signin
  },
  {
    path: 'products',
    component: Products
  }
];
