import { AddressDeliveryTimeEntity } from 'src/core/database/entities/address-deliveries-times/address-deliveries-times.entity';
import { AddressEntity } from 'src/core/database/entities/address/address.entity';
import { DeliveryTimeEntity } from 'src/core/database/entities/deliveries-times/deliveries-times.entity';
export declare class AddressRepositoryService {
    private readonly addressRepository;
    private readonly adressDeliveryTimeRepository;
    private readonly deliveryTimeRepository;
    constructor(addressRepository: typeof AddressEntity, adressDeliveryTimeRepository: typeof AddressDeliveryTimeEntity, deliveryTimeRepository: typeof DeliveryTimeEntity);
    findAddressByUserId(userId: number): Promise<AddressEntity[]>;
    findDelieryTimesByAddress(adressIds: number[]): Promise<AddressDeliveryTimeEntity[]>;
    findActiveAddressByUserId(userId: number): Promise<AddressEntity>;
    save(address: AddressEntity): Promise<AddressEntity>;
    delete(id: number): Promise<number>;
    findOneById(id: number): Promise<AddressEntity>;
    update(id: number, address: AddressEntity): Promise<number[]>;
    cancelPriorityAddress(userId: number): Promise<number[]>;
    setActiveAdrress(id: number): Promise<number[]>;
    updateDelieryTimes(addressId: any, deliveryTimes: any): Promise<void>;
    deleteDeliveryTimes(addressId: any): Promise<void>;
}
