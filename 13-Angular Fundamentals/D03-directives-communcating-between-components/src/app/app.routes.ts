import { Routes } from '@angular/router';
import { Task1 } from './components/task1/task1';
import { Task2 } from './components/task2/task2';

export const routes: Routes = [
    {path:'',redirectTo:'task1',pathMatch:'full'},
    {path:'task1',component:Task1,title:'First Task'},
    {path:'task2',component:Task2,title:'First Task'},
];
