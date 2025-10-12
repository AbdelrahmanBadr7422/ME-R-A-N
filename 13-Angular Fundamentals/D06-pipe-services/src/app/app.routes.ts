import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { PrdList } from './components/prd-list/prd-list';
import { PrdInfo } from './components/prd-info/prd-info';
import { OrderList } from './components/order-list/order-list';
import { OrderInfo } from './components/order-info/order-info';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'Home' },
  { path: 'about', component: About, title: 'About' },
  { path: 'contact', component: Contact, title: 'Contact' },
  { path: 'login', component: Login, title: 'Login' },
  { path: 'register', component: Register, title: 'Register' },
  { path: 'products', component: PrdList, title: 'Products' },
  { path: 'products/:id', component: PrdInfo, title: 'Product' },
  { path: 'orders', component: OrderList, title: 'Product' },
  { path: 'orders/:id', component: OrderInfo, title: 'Product' },
];
