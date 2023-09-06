import { Inject, Injectable } from '@nestjs/common';
import { SUPPLY_REQUEST_REPOSITORY } from 'src/core/constants';
import { SupplyRequestEntity } from 'src/core/database/entities/supply-requests/supply-request.entity';

@Injectable()
export class HomeRepositoryService {
  constructor(
    @Inject(SUPPLY_REQUEST_REPOSITORY)
    private readonly supplyRequestRepository: typeof SupplyRequestEntity,
  ) {}

  createRequestSupply(data: SupplyRequestEntity): Promise<SupplyRequestEntity> {
    return this.supplyRequestRepository.create({
      name: data.name,
      email: data.email,
      supply: data.supply,
      createdAt: new Date(),
    });
  }
}
