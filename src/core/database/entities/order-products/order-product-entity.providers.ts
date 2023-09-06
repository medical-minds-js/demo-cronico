import { ORDER_PRODUCT_REPOSITORY } from 'src/core/constants';
import { OrderProductEntity } from './order-product.entity';

export const orderProductProviders = [
  {
    provide: ORDER_PRODUCT_REPOSITORY,
    useValue: OrderProductEntity,
  },
];
