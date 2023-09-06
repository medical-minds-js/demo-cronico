import { Order } from './order.interface';
import { Product } from './product.interface';

export interface ShoppingProduct {
  product: Product;
  dose: number;
  pieces: number;
  suggestedPieces: number;
  period: number;
  subtotal: number;
  discount: number;
  total: number;
}

export interface Shopping {
  id: number;
  productId: number;
  orderId: number;
  userId: number;
  subscriptionId: number;
  saleId: number;
  shoppingStatusId: number;
  loteId: number;
  batchCode: number;
  expirationDate: Date;
  pieces: number;
  price: number;
  subtotal: number;
  discount: number;
  total: number;
  createdAt: Date;
  order: Order;
  shoppingStatus: ShoppingStatus;
}

export interface ShoppingStatus {
  id: number;
  name: string;
}
