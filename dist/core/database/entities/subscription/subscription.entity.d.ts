import { Model } from 'sequelize-typescript';
import { UserEntity } from '../user/user.entity';
import { SubscriptionStatusEntity } from '../subscription-status/subscription-status.entity';
import { SubscriptionProductEntity } from '../subscription-products/subscription-product.entity';
import { OrderEntity } from '../order/order.entity';
export declare class SubscriptionEntity extends Model {
    id: number;
    userId: number;
    subscriptionStatusId: number;
    name: string;
    period: number;
    subtotal: number;
    discount: number;
    total: number;
    createdAt: Date;
    nextDelivery: Date;
    user: UserEntity;
    subscriptionStatus: SubscriptionStatusEntity;
    products: SubscriptionProductEntity[];
    orders: OrderEntity[];
}
