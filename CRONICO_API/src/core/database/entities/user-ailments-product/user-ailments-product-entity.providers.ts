import { USER_AILMENTS_PRODUCT_REPOSITORY } from 'src/core/constants';
import { UserAilmentsProductEntity } from './user-ailments-product.entity';

export const userAilmentsProductEntityProviders = [
  {
    provide: USER_AILMENTS_PRODUCT_REPOSITORY,
    useValue: UserAilmentsProductEntity,
  },
];
