import { Test, TestingModule } from '@nestjs/testing';
import { PasswordStrategyService } from './password-strategy.service';

describe('PasswordStrategyService', () => {
  let service: PasswordStrategyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PasswordStrategyService],
    }).compile();

    service = module.get<PasswordStrategyService>(PasswordStrategyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
