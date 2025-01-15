export type Tag = 'TRENDING' | 'HOT' | 'NEW';

export interface ProductCategory {
  men?: boolean;
  women?: boolean;
  bag?: boolean;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: ProductCategory;
  quantity: number;
  discount?: number;
  image?: string;
  tag?: Tag;
}
