import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prd-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prd-form.html',
  styleUrl:'./prd-form.css'
})
export class PrdForm {
  @Output() onPrdAdded = new EventEmitter<Product>();

  addPrd(name: string, price: string, cat: string) {
    if (!name || !price || !cat) return;

    this.onPrdAdded.emit({
      name: name,
      price: parseInt(price),
      category: cat,
      favorite: false,
    });
  }
}
