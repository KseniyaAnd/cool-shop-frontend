export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  images: string[];
  category: ProductCategory;
  ratingScore: number;
  ratingCount: number;
  stockCount?: number;
  sku?: string;
  tags?: string[];
  createdAt: string;
}

export enum ProductCategory {
  Electronics = 'electronics',
  Clothing = 'clothing',
  Food = 'food',
}
