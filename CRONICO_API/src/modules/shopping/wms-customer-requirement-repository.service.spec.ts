import { Test, TestingModule } from '@nestjs/testing';
import { WmsCustomerRequirementService } from './wms-customer-requirement-repository.service';

describe('WmsCustomerRequirementService', () => {
  let service: WmsCustomerRequirementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WmsCustomerRequirementService],
    }).compile();

    service = module.get<WmsCustomerRequirementService>(
      WmsCustomerRequirementService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
