import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Product } from '../../services/products';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  product = input.required<Product>();

  starsArray = [1, 2, 3, 4, 5];

  get discountPercent(): number {
    const product = this.product();
    if (product.oldPrice && product.oldPrice > product.price) {
      return Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
    }
    return 0;
  }
}
