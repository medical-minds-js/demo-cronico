import { DELIVERY_TIME_REPOSITORY } from 'src/core/constants';
import { DeliveryTimeEntity } from './deliveries-times.entity';

export const deliveriesTimesEntityProviders = [
  {
    provide: DELIVERY_TIME_REPOSITORY,
    useValue: DeliveryTimeEntity,
  },
];
