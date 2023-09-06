import { ORDER_SUBSCRIPTION_REPOSITORY } from 'src/core/constants';
import { OrderSubscriptionEntity } from './order-subscription.entity';

export const ordersSubscriptionsProviders = [
  {
    provide: ORDER_SUBSCRIPTION_REPOSITORY,
    useValue: OrderSubscriptionEntity,
  },
];
