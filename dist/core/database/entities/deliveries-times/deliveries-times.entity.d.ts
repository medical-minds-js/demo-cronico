import { Model } from 'sequelize-typescript';
import { AddressEntity } from '../address/address.entity';
export declare class DeliveryTimeEntity extends Model {
    id: number;
    name: string;
    startTime: Date;
    endTime: Date;
    status: number;
    address: AddressEntity[];
}
