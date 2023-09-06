import { SubscriptionEntity } from 'src/core/database/entities/subscription/subscription.entity';
export declare class SubscriptionsRepositoryService {
    private readonly subscriptionRepository;
    constructor(subscriptionRepository: typeof SubscriptionEntity);
    findSubscriptionByUserId(userId: number): Promise<SubscriptionEntity[]>;
}
