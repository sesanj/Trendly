export type Tag = 'TRENDING' | 'HOT' | 'NEW' | 'FEATURED';

export interface ProductCategory {
  men?: boolean;
  women?: boolean;
  bag?: boolean;
  shirt?: boolean;
  jacket?: boolean;
  hoodie?: boolean;
  shoe?: boolean;
  jean?: boolean;
  skirt?: boolean;
  dress?: boolean;
  sweatshirt?: boolean;
  pant?: boolean;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: ProductCategory;
  quantity: number;
  size?: string[];
  color?: string[];
  discount?: number;
  image?: {
    image1?: string;
    image2?: string;
    image3?: string;
    image4?: string;
  };
  tag?: Tag;
  featured?: boolean;
}
