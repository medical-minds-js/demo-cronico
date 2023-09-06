import { Product, ProductImage } from './product.interface';

export interface Ailment {
  id: number;
  name: string;
  description: string;
  images: AilmentsImage[];
  products: Product[];
}

export interface AilmentsImage {
  id: number;
  productId: number;
  url: string;
}
