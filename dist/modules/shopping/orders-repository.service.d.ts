import { OrderProductEntity } from 'src/core/database/entities/order-products/order-product.entity';
import { OrderSubscriptionEntity } from 'src/core/database/entities/order-subscription/order-subscription.entity';
import { OrderEntity } from 'src/core/database/entities/order/order.entity';
export declare class OrdersRepositoryService {
    private readonly orderRepository;
    private readonly orderProductsRepository;
    private readonly orderSubscriptionsRepository;
    constructor(orderRepository: typeof OrderEntity, orderProductsRepository: typeof OrderProductEntity, orderSubscriptionsRepository: typeof OrderSubscriptionEntity);
    saveFullOrder(order: OrderEntity): Promise<OrderEntity>;
    findOrdersByUserId(userId: number): Promise<OrderEntity[]>;
    changeNoPaymentStatus(id: number): Promise<[affectedCount: number]>;
    changePaidStatus(id: number, paymentId: string): Promise<[affectedCount: number]>;
    getOrderBySubscriptionIds(subscriptionIds: number[]): Promise<OrderEntity[]>;
    getOrderCardById(id: any): Promise<OrderEntity>;
    saveOrderProducts(orderId: number, items: OrderProductEntity[]): Promise<OrderProductEntity[]>;
    getProductsByOrders(ids: number[]): Promise<OrderProductEntity[]>;
}
