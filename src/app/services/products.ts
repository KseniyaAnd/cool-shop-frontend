import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Product {
  id?: number;
  name: string;
  price: number;
  oldPrice: number;
  image: string;
  rating: number;
  inStock: boolean;
}

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
