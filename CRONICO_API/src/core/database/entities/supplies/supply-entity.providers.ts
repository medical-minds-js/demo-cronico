import { SUPPLY_REPOSITORY } from 'src/core/constants';
import { SupplyEntity } from './supply.entity';

export const supplyEntityProviders = [
  {
    provide: SUPPLY_REPOSITORY,
    useValue: SupplyEntity,
  },
];
