import { ORDER_STATUS_REPOSITORY } from 'src/core/constants';
import { OrderStatusEntity } from './order-status.entity';

export const userEntityProviders = [
  {
    provide: ORDER_STATUS_REPOSITORY,
    useValue: OrderStatusEntity,
  },
];
