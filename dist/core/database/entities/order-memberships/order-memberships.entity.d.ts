import { Model } from 'sequelize-typescript';
import { OrderEntity } from '../order/order.entity';
import { OrderMembershipsStatusEntity } from '../order-memberships-status/order-memberships-status.entity';
export declare class OrderMembershipsEntity extends Model {
    id: number;
    orderId: number;
    membershipsId: number;
    statusId: number;
    name: string;
    expirationDate: Date;
    pieces: number;
    price: number;
    subtotal: number;
    discount: number;
    total: number;
    createdAt: Date;
    order: OrderEntity;
    status: OrderMembershipsStatusEntity;
}
