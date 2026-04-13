import { Component, inject, signal } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { Product, Products } from '../../services/products';

@Component({
  selector: 'app-home',
  imports: [ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private productsService = inject(Products);

  products = signal<Product[]>([]);

  constructor() {
    this.load();
  }

  load() {
    this.productsService.getAll().subscribe((data) => {
      this.products.set(data);
    });
  }
}
