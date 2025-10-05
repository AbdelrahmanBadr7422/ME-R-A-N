import { Component, signal } from '@angular/core';
import { Task1 } from './components/task1/task1';
import { ProductList } from './components/product-list/product-list';
import { Product } from './components/types';
import { Favorite } from './components/favorite/favorite';
import { ProductForm } from './components/product-form/product-form';

@Component({
  selector: 'app-root',
  imports: [ProductList, Favorite, ProductForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  products: Product[] = [];

  favoriteProduct!:string[];
  selectedProduct: Product | null = null;

  addProduct(product: Product) {
    this.products = [...this.products, product];
  }

  deleteProduct(name: string) {
    this.products = this.products.filter((p) => p.name !== name);
  }

  setFavorite(name: string) {
    this.favoriteProduct.push(name);
  }

  editProduct(product: Product) {
    this.selectedProduct = { ...product };
  }

  updateProduct(updated: Product) {
    this.products = this.products.map((p) => (p.name === this.selectedProduct?.name ? updated : p));
    this.selectedProduct = null;
  }

  cancelEdit() {
    this.selectedProduct = null;
  }
}
