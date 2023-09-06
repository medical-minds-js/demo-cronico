import { PRODUCT_PARTS_REPOSITORY } from 'src/core/constants';
import { ProductPartEntity } from './product-parts.entity';

export const productPartEntityProviders = [
  {
    provide: PRODUCT_PARTS_REPOSITORY,
    useValue: ProductPartEntity,
  },
];
