import { Model } from 'sequelize-typescript';
import { OrderProductEntity } from '../order-products/order-product.entity';
export declare class OrderProductStatusEntity extends Model {
    id: number;
    name: string;
    orderProducts: OrderProductEntity[];
}
