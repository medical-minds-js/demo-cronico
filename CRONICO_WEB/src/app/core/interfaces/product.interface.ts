import { Ailment } from './ailment.interface';
import { Sales } from './sales.interface';

export interface Product {
  id: number;
  productType: number;
  name: string;
  description: string;
  images: ProductImage[];
  price: number;
  presentation: number;
  box: number;
  totalPieces: number;
  productParts: Product[];
  ailments: AilmentProduct[];
  sales: Sales[];
}

export interface ProductImage {
  id: number;
  productId: number;
  url: string;
}

export interface AilmentProduct {
  id: number;
  productId: number;
  name: string;
}

export interface ProductFilters {
  name: string;
  page: number;
  itemsPerPage: number;
}

export interface ProductSearch {
  type: number;
  product: Product;
  ailments: Ailment;
}

export interface ProductItemSearch {
  type: number;
  product: Product;
  ailments: Ailment;
}
