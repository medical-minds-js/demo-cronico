import { Time } from '@angular/common';
import { Card } from './cards.interface';
import { Product } from './product.interface';

export interface ShoppingCart {
  id: number;
  userId: number;
  productId: number;
  dose: number;
  pieces: number;
  suggestedPieces: number;
  period: number;
  subtotal: number;
  discount: number;
  total: number;
  product: Product;
  editing: boolean;
}

export interface Order {
  id: number;
  orderStatusId: number;
  userId: number;
  cardId: number;
  name: string;
  total: number;
  street: string;
  streetNumber: string;
  suburb: string;
  cp: number;
  location: string;
  state: string;
  comments: string;
  reference: string;
  startTime: Time;
  rangeTimes: string;
  endTime: Time;
  deliveryDate: null;
  whoReceives: null;
  relationShip: null;
  visits: number;
  paymentId: string;
  paymentCode: null;
  createdAt: Date;
  card: Card;
  status: OrderStatus;
  orderProducts: OrderProduct[];
}

export interface OrderStatus {
  id: number;
  name: string;
}

export interface OrderProduct {
  id: number;
  productId: number;
  orderId: number;
  subscriptionId: number;
  saleId: number;
  statusId: number;
  loteId: number;
  batchCode: string;
  expirationDate: Date;
  pieces: number;
  price: number;
  subtotal: number;
  discount: number;
  total: number;
  createdAt: Date;
  status: OrderProductStatus;
}

export interface OrderProductStatus {
  id: number;
  name: string;
}
