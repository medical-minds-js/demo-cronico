import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptionRepositoryService } from './subscription-repository.service';

describe('SubscriptionRepositoryService', () => {
  let service: SubscriptionRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubscriptionRepositoryService],
    }).compile();

    service = module.get<SubscriptionRepositoryService>(SubscriptionRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
