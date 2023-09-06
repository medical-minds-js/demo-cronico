import { WmsCustomerRequirementDetailEntity } from 'src/core/database/entities/wms-customer-requirement-detail/wms-customer-requirement-detail.entity';
import { WmsCustomerRequirementEntity } from 'src/core/database/entities/wms-customer-requirement/wms-customer-requirement.entity';
export declare class WmsCustomerRequirementRepositoryService {
    private readonly customerRequirementRepository;
    private readonly customerRequirementDetailRepository;
    constructor(customerRequirementRepository: typeof WmsCustomerRequirementEntity, customerRequirementDetailRepository: typeof WmsCustomerRequirementDetailEntity);
    saveOrder(customerId: number, products: WmsCustomerRequirementDetailEntity[]): Promise<boolean>;
}
