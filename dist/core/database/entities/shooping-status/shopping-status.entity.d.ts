import { Model } from 'sequelize-typescript';
import { ShoppingEntity } from '../shopping/shopping.entity';
export declare class ShoppingStatusEntity extends Model {
    id: number;
    name: string;
    shoppings: ShoppingEntity[];
}
