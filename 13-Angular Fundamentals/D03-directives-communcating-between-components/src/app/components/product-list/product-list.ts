import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  @Input() products: Product[] = [];
  @Output() deleteProduct = new EventEmitter<string>();
  @Output() favoriteProduct = new EventEmitter<string>();
  @Output() editProduct = new EventEmitter<Product>();

  remove(name: string) {
    this.deleteProduct.emit(name);
  }

  favorite(name: string) {
    this.favoriteProduct.emit(name);
  }

  edit(product: Product) {
    this.editProduct.emit(product);
  }
}
