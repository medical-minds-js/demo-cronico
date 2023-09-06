import { Test, TestingModule } from '@nestjs/testing';
import { AilmentsService } from './ailments.service';

describe('AilmentsService', () => {
  let service: AilmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AilmentsService],
    }).compile();

    service = module.get<AilmentsService>(AilmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
