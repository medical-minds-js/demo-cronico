import { OrderMembershipsEntity } from 'src/core/database/entities/order-memberships/order-memberships.entity';
import { OrderProductEntity } from 'src/core/database/entities/order-products/order-product.entity';
import { OrderSubscriptionEntity } from 'src/core/database/entities/order-subscription/order-subscription.entity';
import { OrderEntity } from 'src/core/database/entities/order/order.entity';
export declare class OrdersRepositoryService {
    private readonly orderRepository;
    private readonly orderProductsRepository;
    private readonly orderSubscriptionsRepository;
    private readonly orderMembershipsRepository;
    constructor(orderRepository: typeof OrderEntity, orderProductsRepository: typeof OrderProductEntity, orderSubscriptionsRepository: typeof OrderSubscriptionEntity, orderMembershipsRepository: typeof OrderMembershipsEntity);
    saveFullOrder(order: OrderEntity): Promise<OrderEntity>;
    saveOrder(order: OrderEntity): Promise<OrderEntity>;
    findOrdersByUserId(userId: number): Promise<OrderEntity[]>;
    changeNoPaymentStatus(id: number): Promise<[affectedCount: number]>;
    changePaidStatus(id: number, paymentId: string): Promise<[affectedCount: number]>;
    getOrderBySubscriptionIds(subscriptionIds: number[]): Promise<OrderEntity[]>;
    getOrderCardById(id: any): Promise<OrderEntity>;
    saveOrderProducts(orderId: number, items: OrderProductEntity[]): Promise<OrderProductEntity[]>;
    saveOrderMemberships(data: OrderMembershipsEntity): Promise<OrderMembershipsEntity>;
    getProductsByOrders(ids: number[]): Promise<OrderProductEntity[]>;
}
