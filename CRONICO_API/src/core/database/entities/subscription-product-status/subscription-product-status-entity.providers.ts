import { SUBSCRIPTION_PRODUCT_STATUS_REPOSITORY } from 'src/core/constants';
import { SubscriptionProductStatusEntity } from './subscription-product-status.entity';

export const subscriptionStatusEntityProviders = [
  {
    provide: SUBSCRIPTION_PRODUCT_STATUS_REPOSITORY,
    useValue: SubscriptionProductStatusEntity,
  },
];
