import { Inject, Injectable } from '@nestjs/common';
import { SUBSCRIPTION_REPOSITORY } from 'src/core/constants';
import { SubscriptionEntity } from 'src/core/database/entities/subscription/subscription.entity';

@Injectable()
export class SubscriptionRepositoryService {
  constructor(
    @Inject(SUBSCRIPTION_REPOSITORY)
    private readonly subscriptionRepository: typeof SubscriptionEntity,
  ) {}

  async findOneById(id: number): Promise<SubscriptionEntity[]> {
    return this.subscriptionRepository.findAll<SubscriptionEntity>({
      where: { id: id },
    });
  }
  async updateQuantities(sub: SubscriptionEntity): Promise<number[]> {
    return this.subscriptionRepository.update(
      {
        period: sub.period,
        subtotal: sub.subtotal,
        discount: sub.discount,
        total: sub.total,
      },
      {
        where: { id: sub.id },
      },
    );
  }

  async updateNextDelivery(sub: SubscriptionEntity): Promise<number[]> {
    return this.subscriptionRepository.update(
      {
        nextDelivery: sub.nextDelivery,
      },
      {
        where: { id: sub.id },
      },
    );
  }

  async updateStatus(sub: SubscriptionEntity): Promise<number[]> {
    return this.subscriptionRepository.update(
      {
        subscriptionStatusId: sub.subscriptionStatusId,
      },
      {
        where: { id: sub.id },
      },
    );
  }
}
