import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../types/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class Products {
  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  create(product: Product) {
    return this.http.post<Product>(this.apiUrl, product);
  }
}
