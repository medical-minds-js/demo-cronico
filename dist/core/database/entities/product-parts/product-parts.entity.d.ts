import { Model } from 'sequelize-typescript';
import { ProductEntity } from '../product/product.entity';
export declare class ProductPartEntity extends Model {
    id: number;
    productId: number;
    productPartId: number;
    productParts: ProductEntity;
}
