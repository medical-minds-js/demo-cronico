import { Model } from 'sequelize-typescript';
import { ProductEntity } from '../product/product.entity';
import { UserEntity } from '../user/user.entity';
import { SaleEntity } from '../sales/sale.entity';
import { SubscriptionStatusEntity } from '../subscription-status/subscription-status.entity';
export declare class SubscriptionEntity extends Model {
    id: number;
    productId: number;
    userId: number;
    saleId: number;
    subscriptionStatusId: number;
    period: number;
    dose: number;
    pieces: number;
    price: number;
    subtotal: number;
    discount: number;
    total: number;
    nextDelivery: Date;
    createdAt: Date;
    product: ProductEntity;
    user: UserEntity;
    sale: SaleEntity;
    subscriptionStatus: SubscriptionStatusEntity;
}
