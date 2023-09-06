import { Model } from 'sequelize-typescript';
import { OrderEntity } from '../order/order.entity';
import { OrderProductStatusEntity } from '../order-product-status/order-product-status.entity';
export declare class OrderProductEntity extends Model {
    id: number;
    productId: number;
    orderId: number;
    subscriptionId: number;
    saleId: number;
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
    order: OrderEntity;
    status: OrderProductStatusEntity;
}
