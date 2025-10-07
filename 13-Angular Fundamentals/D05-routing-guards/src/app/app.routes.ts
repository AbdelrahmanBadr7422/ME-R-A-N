import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { PrdList } from './components/prd-list/prd-list';
import { PrdInfo } from './components/prd-info/prd-info';
import { NotFound } from './components/not-found/not-found';
import { Info } from './components/info/info';
import { Contact } from './components/contact/contact';
import { loginPageGuard } from './guards/login-page-guard';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'Home' },
  { path: 'login', component: Login, title: 'Login', canActivate: [loginPageGuard] },
  { path: 'prds', component: PrdList, title: 'Product List', canActivate: [authGuard] },
  { path: 'prds/:id', component: PrdInfo, title: 'Product Info', canActivate: [authGuard] },
  {
    path: 'about',
    loadComponent: () => import('./components/about/about').then((c) => c.About),
    title: 'About',
    children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      {
        path: 'info',
        component: Info,
        title: 'Main About',
      },
      {
        path: 'contact',
        component: Contact,
        title: 'Contact Us',
      },
    ],
    canActivate: [authGuard],
  },
  { path: '**', component: NotFound, title: 'Not Found' },
];
