import { Model } from 'sequelize-typescript';
import { ProductEntity } from '../product/product.entity';
export declare class SaleEntity extends Model {
    id: number;
    productId: number;
    percent: number;
    description: string;
    product: ProductEntity;
}
