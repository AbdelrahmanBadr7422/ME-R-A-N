import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class Products {
  private http = inject(HttpClient);
  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products');
  }
}
