import { OrderEntity } from 'src/core/database/entities/order/order.entity';
import { SubscriptionEntity } from 'src/core/database/entities/subscription/subscription.entity';
import { OpenPayCard, OpenPayCustomer, OpenPayPayment, OpenPayTokenCard } from './openpay.interfaces';
import { UserEntity } from 'src/core/database/entities/user/user.entity';
import { ConfirmOrder } from 'src/core/interfaces/confirm-order.interface';
import { CardEntity } from 'src/core/database/entities/cards/cards.entity';
export declare class OpenPayService {
    registerCustomer(data: OpenPayCustomer): Promise<any>;
    addCardToCustomer(customerId: string, cardRequest: OpenPayTokenCard): Promise<any>;
    processPayment(confirmOrder: ConfirmOrder, user: UserEntity, order: OrderEntity, card: CardEntity, items: SubscriptionEntity[]): Promise<OpenPayPayment>;
    getCardsByUser(customerId: string): Promise<OpenPayCard[]>;
}
