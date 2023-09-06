import { Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import {
  ORDER_PRODUCT_REPOSITORY,
  ORDER_REPOSITORY,
  ORDER_SUBSCRIPTION_REPOSITORY,
} from 'src/core/constants';
import { CardEntity } from 'src/core/database/entities/cards/cards.entity';
import { OrderProductStatusEntity } from 'src/core/database/entities/order-product-status/order-product-status.entity';
import { OrderProductEntity } from 'src/core/database/entities/order-products/order-product.entity';
import { OrderStatusEntity } from 'src/core/database/entities/order-status/order-status.entity';
import { OrderSubscriptionEntity } from 'src/core/database/entities/order-subscription/order-subscription.entity';
import { OrderEntity } from 'src/core/database/entities/order/order.entity';
import { SubscriptionEntity } from 'src/core/database/entities/subscription/subscription.entity';

@Injectable()
export class OrdersRepositoryService {
  constructor(
    @Inject(ORDER_REPOSITORY)
    private readonly orderRepository: typeof OrderEntity,
    @Inject(ORDER_PRODUCT_REPOSITORY)
    private readonly orderProductsRepository: typeof OrderProductEntity,
    @Inject(ORDER_SUBSCRIPTION_REPOSITORY)
    private readonly orderSubscriptionsRepository: typeof OrderSubscriptionEntity,
  ) {}

  async saveFullOrder(order: OrderEntity): Promise<OrderEntity> {
    const data = await this.orderRepository.create({ ...order });
    await this.saveOrderProducts(data.id, order.orderProducts);
    return data;
  }

  async findOrdersByUserId(userId: number): Promise<OrderEntity[]> {
    return await this.orderRepository.findAll<OrderEntity>({
      where: { userId: [userId] },
    });
  }

  async changeNoPaymentStatus(id: number) {
    return this.orderRepository.update(
      { subscriptionStatusId: 2 },
      {
        where: { id },
      },
    );
  }

  async changePaidStatus(id: number, paymentId: string) {
    return this.orderRepository.update(
      { subscriptionStatusId: 3, paymentId },
      {
        where: { id },
      },
    );
  }

  async getOrderBySubscriptionIds(
    subscriptionIds: number[],
  ): Promise<OrderEntity[]> {
    const data = await this.orderSubscriptionsRepository.findAll({
      where: { subscriptionId: subscriptionIds },
    });
    const ids = data
      .map((item) => item.orderId)
      .filter((value, index, arr) => arr.indexOf(value) === index);
    return this.orderRepository.findAll({
      where: { id: { [Op.in]: ids } },
      include: [OrderStatusEntity, SubscriptionEntity],
    });
  }

  async getOrderCardById(id): Promise<OrderEntity> {
    return this.orderRepository.findOne({
      where: { id },
      include: [CardEntity],
    });
  }

  async saveOrderProducts(
    orderId: number,
    items: OrderProductEntity[],
  ): Promise<OrderProductEntity[]> {
    return this.orderProductsRepository.bulkCreate(
      items.map((item) => ({
        ...item,
        orderId,
        status: 1,
        visits: 0,
        createdAt: new Date(),
      })),
    );
  }

  async getProductsByOrders(ids: number[]): Promise<OrderProductEntity[]> {
    return this.orderProductsRepository.findAll({
      where: { orderId: ids },
      include: [OrderProductStatusEntity],
    });
  }
}
