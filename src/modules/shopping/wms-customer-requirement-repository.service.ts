import { Inject, Injectable } from '@nestjs/common';
import {
  WMS_CUSTOMER_REQUIREMENT_DETAIL_ENTITY_PROVIDERS,
  WMS_CUSTOMER_REQUIREMENT_ENTITY_PROVIDERS,
} from 'src/core/constants';
import { WmsCustomerRequirementDetailEntity } from 'src/core/database/entities/wms-customer-requirement-detail/wms-customer-requirement-detail.entity';
import { WmsCustomerRequirementEntity } from 'src/core/database/entities/wms-customer-requirement/wms-customer-requirement.entity';

@Injectable()
export class WmsCustomerRequirementRepositoryService {
  constructor(
    @Inject(WMS_CUSTOMER_REQUIREMENT_ENTITY_PROVIDERS)
    private readonly customerRequirementRepository: typeof WmsCustomerRequirementEntity,
    @Inject(WMS_CUSTOMER_REQUIREMENT_DETAIL_ENTITY_PROVIDERS)
    private readonly customerRequirementDetailRepository: typeof WmsCustomerRequirementDetailEntity,
  ) {}

  async saveOrder(
    customerId: number,
    products: WmsCustomerRequirementDetailEntity[],
  ): Promise<boolean> {
    try {
      const requirement = await this.customerRequirementRepository.create({
        customerId,
        requiredDate: new Date(),
        remissionsStatus: 1,
        priority: 1,
        creationDate: new Date(),
        type: 1,
      });
      const details = products.map((product) => ({
        ...product,
        customerRequirementId: requirement.customerRequirementId,
        status: 0,
        remissionStatus: 0,
      }));
      await this.customerRequirementDetailRepository.bulkCreate(details);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
