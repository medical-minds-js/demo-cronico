import { Order } from './order.interface';
import { Product } from './product.interface';
import { Sales } from './sales.interface';
import { Shopping } from './shopping-product.interface';

export interface Subscription {
  id: number;
  name: string;
  userId: number;
  subscriptionStatusId: number;
  period: number;
  subtotal: number;
  discount: number;
  total: number;
  createdAt: Date;
  nextDelivery: Date;
  orders: Order[];
  subscriptionStatus: SubscriptionStatus;
  items: SubscriptionProduct[];
  lastOrder: Order;
}

export interface SubscriptionStatus {
  id: number;
  name: string;
}

export interface SubscriptionProduct {
  id: number;
  subscriptionId: number;
  statusId: number;
  productId: number;
  saleId: number;
  period: number;
  dose: number;
  pieces: number;
  price: number;
  subtotal: number;
  discount: number;
  total: number;
  createdAt: Date;
  status: SubscriptionProductStatus;
  product: Product;
}

export interface SubscriptionProductStatus {
  id: number;
  name: string;
}

export interface ProductSubscription {
  name: string;
  description: string;
  presentation: number;
  productType: number;
  price: number;
}
