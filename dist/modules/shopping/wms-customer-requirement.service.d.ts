import { WmsCustomerRequirementDetailEntity } from 'src/core/database/entities/wms-customer-requirement-detail/wms-customer-requirement-detail.entity';
import { WmsCustomerRequirementEntity } from 'src/core/database/entities/wms-customer-requirement/wms-customer-requirement.entity';
export declare class WmsCustomerRequirementService {
    private readonly customerRequirementRepository;
    private readonly customerRequirementDetailRepository;
    constructor(customerRequirementRepository: typeof WmsCustomerRequirementEntity, customerRequirementDetailRepository: typeof WmsCustomerRequirementDetailEntity);
    saveOrder(porducts: WmsCustomerRequirementDetailEntity[]): Promise<boolean>;
    catch(e: any): boolean;
}
