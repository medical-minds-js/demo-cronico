import { PRODUCT_REPOSITORY } from 'src/core/constants';
import { ProductEntity } from './product.entity';

export const productEntityProviders = [
  {
    provide: PRODUCT_REPOSITORY,
    useValue: ProductEntity,
  },
];
