import { Routes } from '@angular/router';
import { DataToTable } from './components/data-to-table/data-to-table';
import { Slider } from './components/slider/slider';
import { Layout } from './components/layout/layout';

export const routes: Routes = [
  {
    path: '',redirectTo:'task1',pathMatch:'full'
  },
  {
    path: 'task1',
    component: DataToTable,
    title: 'Task One',
  },
  {
    path: 'task2',
    component: Slider,
    title: 'Task Two',
  },
  { path: '**', redirectTo: '' },
];
