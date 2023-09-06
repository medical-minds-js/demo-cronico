import { Model } from 'sequelize-typescript';
export declare class ShoppingEntity extends Model {
    id: number;
    productId: number;
    orderId: number;
    userId: number;
    subscriptionId: number;
    saleId: number;
    shoppingStatusId: number;
    loteId: number;
    batchCode: number;
    expirationDate: number;
    pieces: number;
    price: number;
    subtotal: number;
    discount: number;
    total: number;
    createdAt: Date;
    order: Date;
    shoppingStatus: Date;
}
