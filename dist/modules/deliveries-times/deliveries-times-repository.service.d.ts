import { DeliveryTimeEntity } from 'src/core/database/entities/deliveries-times/deliveries-times.entity';
export declare class DeliveryTimesRepositoryService {
    private readonly deliveryTimesRepository;
    constructor(deliveryTimesRepository: typeof DeliveryTimeEntity);
    save(data: DeliveryTimeEntity): Promise<DeliveryTimeEntity>;
    update(id: number, data: DeliveryTimeEntity): Promise<number[]>;
    updateStatus(id: number): Promise<number[]>;
    findOneById(id: number): Promise<DeliveryTimeEntity>;
    getList(): Promise<DeliveryTimeEntity[]>;
    delete(id: number): Promise<number>;
}
