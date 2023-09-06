import { Model } from 'sequelize-typescript';
import { DeliveryTimeEntity } from '../deliveries-times/deliveries-times.entity';
export declare class AddressDeliveryTimeEntity extends Model {
    id: number;
    addressId: number;
    deliveryTimeId: number;
    deliveryTime: DeliveryTimeEntity;
}
