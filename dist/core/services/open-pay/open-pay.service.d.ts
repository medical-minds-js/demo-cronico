import { OrderEntity } from 'src/core/database/entities/order/order.entity';
import { OpenPayCard, OpenPayCustomer, OpenPayPayment, OpenPayTokenCard } from './openpay.interfaces';
import { UserEntity } from 'src/core/database/entities/user/user.entity';
import { ConfirmOrder } from 'src/core/interfaces/confirm-order.interface';
export declare class OpenPayService {
    registerCustomer(data: OpenPayCustomer): Promise<any>;
    addCardToCustomer(customerId: string, cardRequest: OpenPayTokenCard): Promise<any>;
    processPayment(confirmOrder: ConfirmOrder, order: OrderEntity, user: UserEntity): Promise<OpenPayPayment>;
    getCardsByUser(customerId: string): Promise<OpenPayCard[]>;
    getCardById(customerId: string, cardId: string): Promise<OpenPayCard>;
}
