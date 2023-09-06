import { AddressEntity } from 'src/core/database/entities/address/address.entity';
export declare class AddressRepositoryService {
    private readonly addressRepository;
    constructor(addressRepository: typeof AddressEntity);
    findAddressByUserId(userId: number): Promise<AddressEntity[]>;
    save(address: AddressEntity): Promise<AddressEntity>;
    delete(id: number): Promise<number>;
    findOneById(id: number): Promise<AddressEntity>;
    update(id: number, address: AddressEntity): Promise<number[]>;
    updatePriorityAdrress(id: number): Promise<number[]>;
}
