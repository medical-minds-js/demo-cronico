import { Model } from 'sequelize-typescript';
import { ProductEntity } from '../product/product.entity';
export declare class SupplyEntity extends Model {
    supplyId: number;
    key: string;
    shortKey: string;
    name: string;
    presentation: string;
    type: string;
    rackId: number;
    imageId: number;
    products: ProductEntity[];
}
