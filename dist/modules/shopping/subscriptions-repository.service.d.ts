import { OrderSubscriptionEntity } from 'src/core/database/entities/order-subscription/order-subscription.entity';
import { SubscriptionProductEntity } from 'src/core/database/entities/subscription-products/subscription-product.entity';
import { SubscriptionEntity } from 'src/core/database/entities/subscription/subscription.entity';
import { Pagination } from 'src/core/interfaces/pagination.interface';
export declare class SubscriptionsRepositoryService {
    private readonly subscriptionRepository;
    private readonly subscriptionProductRepository;
    private readonly orderSubscriptionRepository;
    constructor(subscriptionRepository: typeof SubscriptionEntity, subscriptionProductRepository: typeof SubscriptionProductEntity, orderSubscriptionRepository: typeof OrderSubscriptionEntity);
    saveSubscription(data: SubscriptionEntity, subcriptionProducts: SubscriptionProductEntity[]): Promise<SubscriptionEntity>;
    getSubscriptionById(id: number): Promise<SubscriptionEntity>;
    findFullSubscriptionById(id: number): Promise<any>;
    updateOrderId(orderId: number, ids: number[]): Promise<void>;
    changeNoPaymentStatus(ids: number[]): Promise<[affectedCount: number]>;
    changePaidStatus(subscriptions: SubscriptionEntity[]): Promise<[affectedCount: number][]>;
    findSubscriptionByUserId(id: number, userId: number, pagination: Pagination): Promise<SubscriptionEntity[]>;
    findSubscriptionProductByIds(ids: number[]): Promise<SubscriptionProductEntity[]>;
    countSubscriptionByUserId(id: number, userId: number): Promise<number>;
}
