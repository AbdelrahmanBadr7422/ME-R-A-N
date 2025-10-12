import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Products } from '../../services/products';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-prd-list',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './prd-list.html',
  styleUrl: './prd-list.css'
})
export class PrdList implements OnInit {
prdlist!:Product[];
private _productService=inject(Products);

ngOnInit(): void {
  this.getAllProducts();
}

getAllProducts(){
  this._productService.getAllProducts().subscribe({
    next:(prds: Product[])=>{
      this.prdlist = prds
    },
    error:(err)=>{
      console.log(err);
    }
  })
}
}
