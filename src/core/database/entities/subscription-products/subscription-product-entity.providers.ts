import { SUBSCRIPTION_PRODUCT_REPOSITORY } from 'src/core/constants';
import { SubscriptionProductEntity } from './subscription-product.entity';

export const subscriptionProductEntityProviders = [
  {
    provide: SUBSCRIPTION_PRODUCT_REPOSITORY,
    useValue: SubscriptionProductEntity,
  },
];
