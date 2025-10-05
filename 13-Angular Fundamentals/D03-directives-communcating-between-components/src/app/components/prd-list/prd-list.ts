import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../types';

@Component({
  selector: 'app-prd-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prd-list.html',
  styleUrl:'./prd-list.css'
})
export class PrdList {
  @Input() products: Product[] = [];
  @Output() favList = new EventEmitter<Product[]>();

  editingIndex: number | null = null;

  toggleFavorite(index: number) {
    this.products[index].favorite = !this.products[index].favorite;
    this.emitFavorites();
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
    if (this.editingIndex === index) this.editingIndex = null;
    this.emitFavorites();
  }

  editProduct(index: number) {
    this.editingIndex = index;
  }

  saveProduct() {
    this.editingIndex = null;
  }

  private emitFavorites() {
    const favs = this.products.filter((p) => p.favorite);
    this.favList.emit(favs);
  }
}
