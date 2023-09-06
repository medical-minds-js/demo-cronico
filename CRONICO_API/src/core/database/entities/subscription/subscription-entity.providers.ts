import { SUBSCRIPTION_REPOSITORY } from 'src/core/constants';
import { SubscriptionEntity } from './subscription.entity';

export const subscriptionEntityProviders = [
  {
    provide: SUBSCRIPTION_REPOSITORY,
    useValue: SubscriptionEntity,
  },
];
