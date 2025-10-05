import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  imports: [FormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {
  private _editProduct: Product | null = null;

  @Input() set editProduct(value: Product | null) {
    if (value) {
      this.name = value.name;
      this.price = value.price;
      this.category = value.category;
      this.isEdit = true;
    } else {
      this.resetForm();
    }
    this._editProduct = value;
  }

  @Output() addProduct = new EventEmitter<Product>();
  @Output() updateProduct = new EventEmitter<Product>();
  @Output() cancelEdit = new EventEmitter<void>();

  name = '';
  price!: number;
  category = '';
  isEdit = false;

  onSubmit() {
    const product: Product = { name: this.name, price: this.price, category: this.category };
    this.isEdit ? this.updateProduct.emit(product) : this.addProduct.emit(product);
    this.resetForm();
  }

  onCancel() {
    this.cancelEdit.emit();
    this.resetForm();
  }

  private resetForm() {
    this.name = '';
    this.price = 0;
    this.category = '';
    this.isEdit = false;
  }
}
