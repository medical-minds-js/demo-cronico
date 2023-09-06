import { AddressEntity } from 'src/core/database/entities/address/address.entity';
export declare class AddressService {
    private readonly addressRepository;
    private readonly deliveriesTimesRepository;
    findByUserId(userId: number): Promise<AddressEntity[]>;
    findActiveByUserId(userId: number): Promise<AddressEntity>;
    save(address: AddressEntity): Promise<AddressEntity>;
    delete(id: number): Promise<number>;
    updateAddress(id: number, address: AddressEntity): Promise<number[]>;
    setDefaultByUser(userId: number, id: number): Promise<void>;
}
