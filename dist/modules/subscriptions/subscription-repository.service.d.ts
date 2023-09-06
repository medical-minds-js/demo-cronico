import { SubscriptionEntity } from 'src/core/database/entities/subscription/subscription.entity';
export declare class SubscriptionRepositoryService {
    private readonly subscriptionRepository;
    constructor(subscriptionRepository: typeof SubscriptionEntity);
    findOneById(id: number): Promise<SubscriptionEntity[]>;
    updateQuantities(sub: SubscriptionEntity): Promise<number[]>;
    updateNextDelivery(sub: SubscriptionEntity): Promise<number[]>;
    updateStatus(sub: SubscriptionEntity): Promise<number[]>;
}
