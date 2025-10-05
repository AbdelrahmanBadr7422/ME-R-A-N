import { Component } from '@angular/core';
import { Product } from '../types';
import { PrdForm } from '../prd-form/prd-form';
import { PrdList } from '../prd-list/prd-list';

@Component({
  selector: 'app-task2',
  imports: [PrdForm,PrdList],
  templateUrl: './task2.html',
  styleUrl: './task2.css'
})
export class Task2 {
productList: Product[] = [];
  favoriteProducts: Product[] = [];

  addProduct(prd: Product) {
    this.productList.push(prd);
  }

  updateFavorites(favs: Product[]) {
    this.favoriteProducts = favs;
  }
}
