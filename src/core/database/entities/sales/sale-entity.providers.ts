import { SALE_REPOSITORY } from 'src/core/constants';
import { SaleEntity } from './sale.entity';

export const saleEntityProviders = [
  {
    provide: SALE_REPOSITORY,
    useValue: SaleEntity,
  },
];
