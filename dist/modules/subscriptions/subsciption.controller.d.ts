import { SubscriptionEntity } from 'src/core/database/entities/subscription/subscription.entity';
import { SuccessResponse } from 'src/core/clases/success.response';
export declare class SubsciptionController {
    private readonly subscriptionService;
    updateQuantities(request: SubscriptionEntity): Promise<SuccessResponse>;
    updateNextDelivery(request: SubscriptionEntity): Promise<SuccessResponse>;
    updateStatus(request: SubscriptionEntity): Promise<SuccessResponse>;
}
