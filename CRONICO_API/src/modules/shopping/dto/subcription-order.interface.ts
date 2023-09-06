import { OrderProductStatusEntity } from 'src/core/database/entities/order-product-status/order-product-status.entity';
import { OrderEntity } from 'src/core/database/entities/order/order.entity';
import { SubscriptionProductEntity } from 'src/core/database/entities/subscription-products/subscription-product.entity';

export interface SubcriptionOrder {
  id: number;
  productId: number;
  orderId: number;
  subscriptionId: number;
  statusId: number;
  loteId: number;
  batchCode: number;
  expirationDate: number;
  pieces: number;
  price: number;
  subtotal: number;
  discount: number;
  total: number;
  createdAt: Date;
  status: OrderProductStatusEntity;
  items: SubscriptionProductEntity[];
  orders: OrderEntity[];
}
