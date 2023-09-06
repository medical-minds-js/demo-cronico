import { Model } from 'sequelize-typescript';
import { UserEntity } from '../user/user.entity';
import { OrderEntity } from '../order/order.entity';
export declare class CardEntity extends Model {
    id: number;
    userId: number;
    active: number;
    cardOpenPayId: string;
    createdAt: Date;
    user: UserEntity;
    orders: OrderEntity;
}
