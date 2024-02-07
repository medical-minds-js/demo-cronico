import { Model } from 'sequelize-typescript';
import { OrderMembershipsEntity } from '../order-memberships/order-memberships.entity';
export declare class OrderMembershipsStatusEntity extends Model {
    id: number;
    name: string;
    orderMemberships: OrderMembershipsEntity[];
}
