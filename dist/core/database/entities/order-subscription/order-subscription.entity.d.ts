import { Model } from 'sequelize-typescript';
import { OrderEntity } from '../order/order.entity';
export declare class OrderSubscriptionEntity extends Model {
    id: number;
    subscriptionId: number;
    orderId: number;
    order: OrderEntity;
}
