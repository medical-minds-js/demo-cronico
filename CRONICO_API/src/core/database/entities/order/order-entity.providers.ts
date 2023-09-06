import { ORDER_REPOSITORY } from 'src/core/constants';
import { OrderEntity } from './order.entity';

export const ordersProviders = [
  {
    provide: ORDER_REPOSITORY,
    useValue: OrderEntity,
  },
];
