import { ADDRESS_DELIVERIES_TIME_REPOSITORY } from 'src/core/constants';
import { AddressDeliveryTimeEntity } from './address-deliveries-times.entity';

export const addressDeliveriesTimesEntityProviders = [
  {
    provide: ADDRESS_DELIVERIES_TIME_REPOSITORY,
    useValue: AddressDeliveryTimeEntity,
  },
];
