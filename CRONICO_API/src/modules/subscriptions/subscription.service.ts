import { Inject, Injectable } from '@nestjs/common';
import { SubscriptionRepositoryService } from './subscription-repository.service';
import { SubscriptionEntity } from 'src/core/database/entities/subscription/subscription.entity';

@Injectable()
export class SubscriptionService {
  @Inject(SubscriptionRepositoryService)
  private readonly subscriptionRepository: SubscriptionRepositoryService;

  async updateQuantities(sub: SubscriptionEntity): Promise<number[]> {
    const cartFinded = await this.subscriptionRepository.findOneById(sub.id);
    if (cartFinded == null) {
      return [-1];
    }
    const data = await this.subscriptionRepository.updateQuantities(sub);
    return data;
  }

  async updateNextDelivery(sub: SubscriptionEntity): Promise<number[]> {
    const cartFinded = await this.subscriptionRepository.findOneById(sub.id);
    if (cartFinded == null) {
      return [-1];
    }
    const data = await this.subscriptionRepository.updateNextDelivery(sub);
    return data;
  }

  async updateStatus(sub: SubscriptionEntity): Promise<number[]> {
    const cartFinded = await this.subscriptionRepository.findOneById(sub.id);
    if (cartFinded == null) {
      return [-1];
    }
    const data = await this.subscriptionRepository.updateStatus(sub);
    return data;
  }
}
