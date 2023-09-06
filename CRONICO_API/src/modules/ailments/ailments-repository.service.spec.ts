import { Test, TestingModule } from '@nestjs/testing';
import { AilmentsRepositoryService } from './ailments-repository.service';

describe('AilmentsRepositoryService', () => {
  let service: AilmentsRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AilmentsRepositoryService],
    }).compile();

    service = module.get<AilmentsRepositoryService>(AilmentsRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
