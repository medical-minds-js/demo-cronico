import { SUBSCRIPTION_STATUS_REPOSITORY } from 'src/core/constants';
import { SubscriptionStatusEntity } from './subscription-status.entity';

export const subscriptionStatusEntityProviders = [
  {
    provide: SUBSCRIPTION_STATUS_REPOSITORY,
    useValue: SubscriptionStatusEntity,
  },
];
