import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrdForm } from './components/prd-form/prd-form';
import { PrdList } from './components/prd-list/prd-list';
import { Product } from './components/types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [PrdForm, PrdList,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('D04-reactive-forms-lifecycle-hooks');
  newPrdParent!:Product;
  addProduct(prd:Product) {
    this.newPrdParent = prd;
  }
}
