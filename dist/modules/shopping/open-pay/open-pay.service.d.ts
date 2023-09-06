import { OrderEntity } from 'src/core/database/entities/order/order.entity';
import { SubscriptionEntity } from 'src/core/database/entities/subscription/subscription.entity';
import { OpenPayPayment } from './op-payment.interface';
export declare class OpenPayService {
    processPayment(order: OrderEntity, items: SubscriptionEntity[]): OpenPayPayment;
}
