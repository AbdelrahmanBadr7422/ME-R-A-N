import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../types';

@Component({
  selector: 'app-prd-list',
  imports: [],
  templateUrl: './prd-list.html',
  styleUrl: './prd-list.css',
})
export class PrdList implements OnChanges {
  @Input() product!: Product;
  prdList!: Product[];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['product'].firstChange) return;
    this.prdList.push(this.product);
  }
}
