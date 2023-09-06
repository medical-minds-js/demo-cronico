import { Model } from 'sequelize-typescript';
import { ProductEntity } from '../product/product.entity';
export declare class ProductImageEntity extends Model {
    id: number;
    productId: number;
    url: string;
    images: ProductEntity;
}
