import { Model } from 'sequelize-typescript';
import { DeliveryTimeEntity } from '../deliveries-times/deliveries-times.entity';
export declare class AddressEntity extends Model {
    id: number;
    userId: number;
    name: string;
    street: string;
    streetNumber: string;
    interiorNumber: string;
    suburb: string;
    cp: number;
    location: string;
    comments: string;
    state: string;
    reference: string;
    status: number;
    cretedAt: number;
    deletedAt: number;
    deliveryTimes: DeliveryTimeEntity[];
}
