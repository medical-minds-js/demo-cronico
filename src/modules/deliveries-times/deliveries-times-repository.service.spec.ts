import { Test, TestingModule } from '@nestjs/testing';
import { DeliveriesTimesRepositoryService } from './deliveries-times-repository.service';

describe('DeliveriesTimesRepositoryService', () => {
  let service: DeliveriesTimesRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeliveriesTimesRepositoryService],
    }).compile();

    service = module.get<DeliveriesTimesRepositoryService>(DeliveriesTimesRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
