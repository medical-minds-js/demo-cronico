import { WMS_CUSTOMER_REQUIREMENT_ENTITY_PROVIDERS } from 'src/core/constants';
import { WmsCustomerRequirementEntity } from './wms-customer-requirement.entity';

export const wmsCustomerRequirementEntityProviders = [
  {
    provide: WMS_CUSTOMER_REQUIREMENT_ENTITY_PROVIDERS,
    useValue: WmsCustomerRequirementEntity,
  },
];
