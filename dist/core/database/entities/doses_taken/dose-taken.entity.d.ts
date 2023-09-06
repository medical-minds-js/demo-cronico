import { Model } from 'sequelize-typescript';
import { SubscriptionProductEntity } from '../subscription-products/subscription-product.entity';
export declare class DoseTakenEntity extends Model {
    id: number;
    subscriptionProductId: number;
    doseDate: Date;
    status: number;
    statusName: string;
    userAilmentsProduct: SubscriptionProductEntity;
}
