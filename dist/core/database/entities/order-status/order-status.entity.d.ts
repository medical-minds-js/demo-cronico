import { Model } from 'sequelize-typescript';
import { OrderEntity } from '../order/order.entity';
export declare class OrderStatusEntity extends Model {
    id: number;
    name: string;
    orders: OrderEntity[];
}
