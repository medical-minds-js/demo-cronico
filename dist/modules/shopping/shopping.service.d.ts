import { SubscriptionEntity } from 'src/core/database/entities/subscription/subscription.entity';
import { OrderEntity } from 'src/core/database/entities/order/order.entity';
import { ConfirmOrder } from 'src/core/interfaces/confirm-order.interface';
import { Pagination } from 'src/core/interfaces/pagination.interface';
import { PaginatedList } from 'src/core/interfaces/paginated-list.interface';
import { OpenPayCard } from 'src/core/services/open-pay/openpay.interfaces';
export declare class ShoppingService {
    private readonly subscriptionsService;
    private readonly orderRepository;
    private readonly wmsCustomerRequirementRepositoryService;
    private readonly openPayService;
    private readonly productsService;
    private readonly userService;
    createOrder(confirmOrder: ConfirmOrder, order: OrderEntity, subscriptions: SubscriptionEntity[]): Promise<any>;
    private sendRequiementWms;
    private generateSyncData;
    getShopingById(id: number): Promise<SubscriptionEntity>;
    getListShoppping(userId: number, options: Pagination, id?: number): Promise<PaginatedList>;
    findSuscriptionsByUserId(userId: number): Promise<SubscriptionEntity[]>;
    findOrdersByUserId(userId: number): Promise<OrderEntity[]>;
    getOrderCard(userId: any, orderId: any): Promise<OpenPayCard>;
}
