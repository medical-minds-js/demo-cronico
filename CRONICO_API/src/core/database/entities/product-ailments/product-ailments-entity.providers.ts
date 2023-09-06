import { PRODUCT_AILMENTS_REPOSITORY } from 'src/core/constants';
import { ProductAilmentsEntity } from './product-ailments.entity';

export const productAilmentsEntityProviders = [
  {
    provide: PRODUCT_AILMENTS_REPOSITORY,
    useValue: ProductAilmentsEntity,
  },
];
