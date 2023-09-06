import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptionsRepositoryService } from './subscriptions-repository.service';

describe('SubscriptionsRepositoryService', () => {
  let service: SubscriptionsRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubscriptionsRepositoryService],
    }).compile();

    service = module.get<SubscriptionsRepositoryService>(SubscriptionsRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
