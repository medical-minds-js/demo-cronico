import { ADDRESS_REPOSITORY } from 'src/core/constants';
import { AddressEntity } from './address.entity';

export const addressEntityProviders = [
  {
    provide: ADDRESS_REPOSITORY,
    useValue: AddressEntity,
  },
];
