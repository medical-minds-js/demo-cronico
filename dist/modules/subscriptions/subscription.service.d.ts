import { SubscriptionEntity } from 'src/core/database/entities/subscription/subscription.entity';
export declare class SubscriptionService {
    private readonly subscriptionRepository;
    updateQuantities(sub: SubscriptionEntity): Promise<number[]>;
    updateNextDelivery(sub: SubscriptionEntity): Promise<number[]>;
    updateStatus(sub: SubscriptionEntity): Promise<number[]>;
}
