import { Model } from 'sequelize-typescript';
import { ProductEntity } from '../product/product.entity';
export declare class ShoppingCartEntity extends Model {
    id: number;
    userId: number;
    productId: number;
    period: number;
    dose: number;
    pieces: number;
    subtotal: number;
    discount: number;
    total: number;
    createdAt: Date;
    product: ProductEntity;
}
