import { SubscriptionEntity } from 'src/core/database/entities/subscription/subscription.entity';
export declare class SubscriptionsService {
    private readonly subscriptionsRepository;
    findByUserId(userId: number): Promise<SubscriptionEntity[]>;
}
