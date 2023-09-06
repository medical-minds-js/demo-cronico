import { DeliveryTimeEntity } from 'src/core/database/entities/deliveries-times/deliveries-times.entity';
export declare class DeliveriesTimesService {
    private readonly deliveriesTimesRepository;
    getDeliveriesTimesList(): Promise<DeliveryTimeEntity[]>;
    save(delivery: DeliveryTimeEntity): Promise<DeliveryTimeEntity>;
    delete(id: number): Promise<number>;
    updateDeliveryTime(id: number, delivery: DeliveryTimeEntity): Promise<number[]>;
}
