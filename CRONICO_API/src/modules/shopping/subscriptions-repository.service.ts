import { Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import {
  ORDER_SUBSCRIPTION_REPOSITORY,
  SUBSCRIPTION_PRODUCT_REPOSITORY,
  SUBSCRIPTION_REPOSITORY,
} from 'src/core/constants';
import { OrderSubscriptionEntity } from 'src/core/database/entities/order-subscription/order-subscription.entity';
import { ProductEntity } from 'src/core/database/entities/product/product.entity';
import { SubscriptionProductStatusEntity } from 'src/core/database/entities/subscription-product-status/subscription-product-status.entity';
import { SubscriptionProductEntity } from 'src/core/database/entities/subscription-products/subscription-product.entity';
import { SubscriptionStatusEntity } from 'src/core/database/entities/subscription-status/subscription-status.entity';
import { SubscriptionEntity } from 'src/core/database/entities/subscription/subscription.entity';
import { Pagination } from 'src/core/interfaces/pagination.interface';

@Injectable()
export class SubscriptionsRepositoryService {
  constructor(
    @Inject(SUBSCRIPTION_REPOSITORY)
    private readonly subscriptionRepository: typeof SubscriptionEntity,
    @Inject(SUBSCRIPTION_PRODUCT_REPOSITORY)
    private readonly subscriptionProductRepository: typeof SubscriptionProductEntity,
    @Inject(ORDER_SUBSCRIPTION_REPOSITORY)
    private readonly orderSubscriptionRepository: typeof OrderSubscriptionEntity,
  ) {}

  async saveSubscription(
    data: SubscriptionEntity,
    subcriptionProducts: SubscriptionProductEntity[],
  ): Promise<SubscriptionEntity> {
    const subscription = await this.subscriptionRepository.create({
      ...data,
      visits: 0,
      createdAt: new Date(),
    });
    const products = subcriptionProducts.map((item) => ({
      ...item,
      subscriptionId: subscription.id,
      createdAt: new Date(),
    }));
    await this.subscriptionProductRepository.bulkCreate(products);
    return subscription;
  }

  async getSubscriptionById(id: number) {
    return this.subscriptionRepository.findOne({ where: { id } });
  }

  async findFullSubscriptionById(id: number) {
    const data = await this.subscriptionRepository.findOne({ where: { id } });
    const products = await this.subscriptionProductRepository.findAll({
      where: { subscriptionId: id },
    });
    return {
      ...data.get({ plain: true }),
      products: products.map((item) => item.get({ plain: true })),
    };
  }

  async updateOrderId(orderId: number, ids: number[]) {
    const data = ids.map((subscriptionId) => ({ orderId, subscriptionId }));
    await this.orderSubscriptionRepository.bulkCreate(data);
  }

  async changeNoPaymentStatus(ids: number[]) {
    return this.subscriptionRepository.update(
      { subscriptionStatusId: 2 },
      {
        where: { id: { [Op.in]: ids } },
      },
    );
  }

  async changePaidStatus(subscriptions: SubscriptionEntity[]) {
    return Promise.all(
      subscriptions.map((item) => {
        const nextDelivery = new Date();
        nextDelivery.setDate(nextDelivery.getDate() + item.period);
        return this.subscriptionRepository.update(
          {
            subscriptionStatusId: 3,
            nextDelivery: nextDelivery.toISOString().substring(0, 10),
          },
          {
            where: { id: item.id },
          },
        );
      }),
    );
  }

  async findSubscriptionByUserId(
    id: number,
    userId: number,
    pagination: Pagination,
  ): Promise<SubscriptionEntity[]> {
    const wheres = {} as any;
    if (id) {
      wheres.id = id;
    }
    if (userId) {
      wheres.userId = userId;
    }
    const page = pagination.page ? Number(pagination.page) : 1;
    const itemsPerPage = pagination.itemsPerPage
      ? Number(pagination.itemsPerPage)
      : 100000;
    return this.subscriptionRepository.findAll<SubscriptionEntity>({
      where: wheres,
      include: [SubscriptionStatusEntity],
      order: [['id', 'DESC']],
      limit: itemsPerPage,
      offset: (page - 1) * itemsPerPage,
    });
  }

  async findSubscriptionProductByIds(
    ids: number[],
  ): Promise<SubscriptionProductEntity[]> {
    return this.subscriptionProductRepository.findAll<SubscriptionProductEntity>(
      {
        where: { subscriptionId: [ids] },
        include: [SubscriptionProductStatusEntity, ProductEntity],
      },
    );
  }

  async countSubscriptionByUserId(id: number, userId: number): Promise<number> {
    const wheres = {} as any;
    if (id) {
      wheres.id = id;
    }
    if (userId) {
      wheres.userId = userId;
    }
    return this.subscriptionRepository.count({
      where: wheres,
    });
  }
}
