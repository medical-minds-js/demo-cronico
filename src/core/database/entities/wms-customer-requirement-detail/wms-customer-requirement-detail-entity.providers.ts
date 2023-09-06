import { WMS_CUSTOMER_REQUIREMENT_DETAIL_ENTITY_PROVIDERS } from 'src/core/constants';
import { WmsCustomerRequirementDetailEntity } from './wms-customer-requirement-detail.entity';

export const wmsCustomerRequirementDetailEntityProviders = [
  {
    provide: WMS_CUSTOMER_REQUIREMENT_DETAIL_ENTITY_PROVIDERS,
    useValue: WmsCustomerRequirementDetailEntity,
  },
];
