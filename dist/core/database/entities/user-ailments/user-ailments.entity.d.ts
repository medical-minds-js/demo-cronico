import { Model } from 'sequelize-typescript';
import { UserAilmentsProductEntity } from '../user-ailments-product/user-ailments-product.entity';
export declare class UserAilmentsEntity extends Model {
    id: number;
    userId: number;
    ailmentsId: number;
    typeDetection: number;
    createdAt: Date;
    userAilmentsProducts: UserAilmentsProductEntity[];
}
