import { Test, TestingModule } from '@nestjs/testing';
import { DeliveriesTimesService } from './deliveries-times.service';

describe('DeliveriesTimesService', () => {
  let service: DeliveriesTimesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeliveriesTimesService],
    }).compile();

    service = module.get<DeliveriesTimesService>(DeliveriesTimesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
