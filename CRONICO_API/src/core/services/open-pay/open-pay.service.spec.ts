import { Test, TestingModule } from '@nestjs/testing';
import { OpenPayService } from './open-pay.service';

describe('OpenPayService', () => {
  let service: OpenPayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpenPayService],
    }).compile();

    service = module.get<OpenPayService>(OpenPayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
