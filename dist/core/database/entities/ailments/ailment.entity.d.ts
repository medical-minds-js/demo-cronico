import { Model } from 'sequelize-typescript';
import { ProductEntity } from '../product/product.entity';
import { ProductAilmentsEntity } from '../product-ailments/product-ailments.entity';
import { AilmentsImageEntity } from '../ailments-images/ailment-images.entity';
import { UserEntity } from '../user/user.entity';
export declare class AilmentEntity extends Model {
    id: number;
    products: ProductEntity[];
    name: string;
    description: string;
    images: AilmentsImageEntity[];
    productParts: ProductAilmentsEntity[];
    searchType: number;
    typeDetection: number;
    users: UserEntity[];
}
