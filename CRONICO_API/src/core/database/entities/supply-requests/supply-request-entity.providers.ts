import { SUPPLY_REQUEST_REPOSITORY } from 'src/core/constants';
import { SupplyRequestEntity } from './supply-request.entity';

export const supplyRequestEntityProviders = [
  {
    provide: SUPPLY_REQUEST_REPOSITORY,
    useValue: SupplyRequestEntity,
  },
];
