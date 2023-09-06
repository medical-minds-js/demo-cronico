import { Test, TestingModule } from '@nestjs/testing';
import { CardsRepositoryService } from './cards-repository.service';

describe('CardsRepositoryService', () => {
  let service: CardsRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardsRepositoryService],
    }).compile();

    service = module.get<CardsRepositoryService>(CardsRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
