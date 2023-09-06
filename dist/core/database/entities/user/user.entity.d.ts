import { Model } from 'sequelize-typescript';
import { ProfileEntity } from '../profile/profile.entity';
import { AddressEntity } from '../address/address.entity';
import { OrderEntity } from '../order/order.entity';
import { CardEntity } from '../cards/cards.entity';
import { AilmentEntity } from '../ailments/ailment.entity';
export declare class UserEntity extends Model {
    id: number;
    profileId: string;
    name: string;
    surname: string;
    secondSurname: string;
    birthDate: Date;
    picture: string;
    userName: string;
    email: string;
    pass: string;
    salt: string;
    enableOpenPay: string;
    openPayId: string;
    createdAt: Date;
    profile: ProfileEntity;
    address: AddressEntity;
    orders: OrderEntity;
    cards: CardEntity;
    ailments: AilmentEntity[];
}
