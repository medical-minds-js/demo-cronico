import { SupplyRequestEntity } from 'src/core/database/entities/supply-requests/supply-request.entity';
export declare class HomeRepositoryService {
    private readonly supplyRequestRepository;
    constructor(supplyRequestRepository: typeof SupplyRequestEntity);
    createRequestSupply(data: SupplyRequestEntity): Promise<SupplyRequestEntity>;
}
