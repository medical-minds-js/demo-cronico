import { Model } from 'sequelize-typescript';
import { ProductEntity } from '../product/product.entity';
import { SaleEntity } from '../sales/sale.entity';
import { SubscriptionProductStatusEntity } from '../subscription-product-status/subscription-product-status.entity';
import { DoseTakenEntity } from '../doses_taken/dose-taken.entity';
export declare class SubscriptionProductEntity extends Model {
    id: number;
    subscriptionId: number;
    statusId: number;
    productId: number;
    saleId: number;
    period: number;
    dose: number;
    pieces: number;
    price: number;
    subtotal: number;
    discount: number;
    total: number;
    createdAt: Date;
    takeDose: number;
    initialTake: Date;
    intakePeriod: Date;
    firstTake: Date;
    product: ProductEntity;
    sale: SaleEntity;
    status: SubscriptionProductStatusEntity;
    dosesTaken: DoseTakenEntity[];
}
