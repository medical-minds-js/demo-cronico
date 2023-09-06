import { ORDER_PRODUCT_STATUS_REPOSITORY } from 'src/core/constants';
import { OrderProductStatusEntity } from './order-product-status.entity';

export const userEntityProviders = [
  {
    provide: ORDER_PRODUCT_STATUS_REPOSITORY,
    useValue: OrderProductStatusEntity,
  },
];
