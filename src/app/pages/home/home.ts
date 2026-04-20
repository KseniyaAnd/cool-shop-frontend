import { Component, inject, signal } from '@angular/core';
import { Products } from '../../services/products';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../types/interfaces/product.interface';

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
